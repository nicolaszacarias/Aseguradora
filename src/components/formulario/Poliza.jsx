import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "../../utils/site";
import Pendiente from "../../utils/Pendiente";
import { validar, campos, pasos, armarResumen, mostrar } from "./validacion";
import "./poliza.css";

// Credenciales de EmailJS por variables de entorno (archivo .env.local, no se versiona).
// El sitio original tenía valores de ejemplo ("tu_service_id"), por lo que el envío nunca funcionó.
const EMAILJS = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const envioConfigurado = Boolean(EMAILJS.service && EMAILJS.template && EMAILJS.publicKey);

const inicial = Object.fromEntries(campos.map((c) => [c.name, c.type === "checkbox" ? false : ""]));

const Campo = ({ c, valor, error, onChange, onBlur }) => {
  const id = `f-${c.name}`;
  const ayudaId = c.ayuda ? `${id}-ayuda` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [ayudaId, errorId].filter(Boolean).join(" ") || undefined;
  const comunes = {
    id,
    name: c.name,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    "aria-required": c.required || undefined,
    onBlur,
  };

  if (c.type === "checkbox") {
    return (
      <div className={`campo campo--check ${error ? "con-error" : ""}`}>
        <input type="checkbox" checked={valor} onChange={(e) => onChange(c.name, e.target.checked)} {...comunes} />
        <label htmlFor={id}>{c.label}{c.required && <span aria-hidden> *</span>}</label>
        {error && <p className="campo-error" id={errorId}>{error}</p>}
      </div>
    );
  }

  if (c.type === "radio") {
    return (
      <fieldset className={`campo campo--radio ${error ? "con-error" : ""}`} aria-describedby={describedBy}>
        <legend>{c.label}{c.required && <span aria-hidden> *</span>}</legend>
        <div className="radios">
          {c.opciones.map((o) => (
            <label key={o}>
              <input
                type="radio"
                name={c.name}
                value={o}
                checked={valor === o}
                onChange={() => onChange(c.name, o)}
                onBlur={onBlur}
              />
              {o}
            </label>
          ))}
        </div>
        {c.ayuda && <p className="campo-ayuda" id={ayudaId}>{c.ayuda}</p>}
        {error && <p className="campo-error" id={errorId}>{error}</p>}
      </fieldset>
    );
  }

  const control =
    c.type === "select" ? (
      <select value={valor} onChange={(e) => onChange(c.name, e.target.value)} {...comunes}>
        <option value="">Elegí una opción</option>
        {c.opciones.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    ) : c.type === "textarea" ? (
      <textarea rows={6} maxLength={c.max} value={valor} onChange={(e) => onChange(c.name, e.target.value)} {...comunes} />
    ) : (
      <input
        type={c.type || "text"}
        value={valor}
        onChange={(e) => onChange(c.name, e.target.value)}
        autoComplete={c.autoComplete || "off"}
        inputMode={c.inputMode}
        max={c.type === "date" && c.noFutura ? new Date().toISOString().slice(0, 10) : undefined}
        {...comunes}
      />
    );

  return (
    <div className={`campo ${c.ancho ? "campo--ancho" : ""} ${error ? "con-error" : ""}`}>
      <label htmlFor={id}>
        {c.label}
        {c.required ? <span aria-hidden> *</span> : <span className="opcional"> (opcional)</span>}
      </label>
      {c.ayuda && <p className="campo-ayuda" id={ayudaId}>{c.ayuda}</p>}
      {control}
      {c.max && <p className="campo-contador" aria-hidden>{valor.length}/{c.max}</p>}
      {error && <p className="campo-error" id={errorId}>{error}</p>}
    </div>
  );
};

const SiniestroForm = () => {
  const [datos, setDatos] = useState(inicial);
  const [errores, setErrores] = useState({});
  const [paso, setPaso] = useState(0);
  const [estado, setEstado] = useState("editando"); // editando | enviando | enviado | error | sin-configurar
  const [copiado, setCopiado] = useState(false);
  const tituloPaso = useRef(null);
  const resumenErrores = useRef(null);

  const visibles = (i) => campos.filter((c) => c.paso === i && (!c.si || c.si(datos)));

  const onChange = (name, value) => {
    setDatos((d) => ({ ...d, [name]: value }));
    if (errores[name]) setErrores((e) => ({ ...e, [name]: validar(campos.find((c) => c.name === name), value, datos) }));
  };
  const onBlur = (c) => () => setErrores((e) => ({ ...e, [c.name]: validar(c, datos[c.name], datos) }));

  const validarPaso = (i) => {
    const nuevos = {};
    visibles(i).forEach((c) => {
      const err = validar(c, datos[c.name], datos);
      if (err) nuevos[c.name] = err;
    });
    setErrores(nuevos);
    if (Object.keys(nuevos).length) {
      requestAnimationFrame(() => resumenErrores.current?.focus());
      return false;
    }
    return true;
  };

  const irA = (i) => {
    setPaso(i);
    setErrores({});
    requestAnimationFrame(() => tituloPaso.current?.focus());
  };

  const siguiente = (e) => {
    e.preventDefault();
    if (!validarPaso(paso)) return;
    if (paso < pasos.length - 1) return irA(paso + 1);
    enviar();
  };

  const enviar = async () => {
    if (!envioConfigurado) {
      setEstado("sin-configurar");
      return;
    }
    setEstado("enviando");
    try {
      const params = Object.fromEntries(
        campos.filter((c) => !c.si || c.si(datos)).map((c) => [c.name, c.type === "checkbox" ? (datos[c.name] ? "Sí" : "No") : datos[c.name]])
      );
      await emailjs.send(EMAILJS.service, EMAILJS.template, params, { publicKey: EMAILJS.publicKey });
      setEstado("enviado");
      setDatos(inicial); // solo se borra si el envío fue exitoso
    } catch {
      setEstado("error");
    }
  };

  const copiarResumen = async () => {
    try {
      await navigator.clipboard.writeText(armarResumen(datos));
      setCopiado(true);
    } catch {
      setCopiado(false);
    }
  };

  const listaErrores = Object.entries(errores).filter(([, v]) => v);

  if (estado === "enviado") {
    return (
      <section className="sf-wrapper contenedor">
        <div className="sf-resultado sf-resultado--ok" role="status">
          <h1>Recibimos tu aviso</h1>
          <p>
            Lo vamos a revisar y te contactaremos por los medios que indicaste. Recordá que este aviso{" "}
            <strong>no reemplaza la denuncia ante tu compañía aseguradora</strong>, que debe hacerse dentro de
            los 3 días de conocido el siniestro (art. 46, Ley 17.418).
          </p>
          <Link className="btn btn--primario" to="/">Volver al inicio</Link>
        </div>
      </section>
    );
  }

  const camposPaso = visibles(paso);

  return (
    <section className="sf-wrapper contenedor">
      <header className="sf-cabecera">
        <h1>Aviso de siniestro</h1>
        <p className="intro">
          Contanos qué pasó y te ayudamos con el trámite. Tarda unos 5 minutos. Los campos con * son obligatorios.
        </p>
        <div className="sf-importante">
          <p>
            <strong>Importante:</strong> este formulario nos avisa a nosotros, tus asesores. No es la denuncia
            ante tu compañía aseguradora. La ley establece que el siniestro se comunique a la aseguradora
            dentro de los 3 días de conocerlo (art. 46, Ley 17.418): hacelo por los canales que figuran en
            tu póliza. Si hay personas lesionadas, llamá primero al 911.
          </p>
        </div>
      </header>

      <ol className="sf-progreso" aria-label="Pasos del formulario">
        {pasos.map((p, i) => (
          <li key={p} className={i === paso ? "actual" : i < paso ? "hecho" : ""} aria-current={i === paso ? "step" : undefined}>
            <span className="sf-num" aria-hidden>{i + 1}</span>
            <span className="sf-nombre">{p}</span>
          </li>
        ))}
      </ol>

      <form className="sf-form" onSubmit={siguiente} noValidate>
        <h2 ref={tituloPaso} tabIndex={-1} className="sf-titulo-paso">
          <span className="visualmente-oculto">Paso {paso + 1} de {pasos.length}: </span>
          {pasos[paso]}
        </h2>

        {listaErrores.length > 0 && (
          <div className="sf-errores" ref={resumenErrores} tabIndex={-1} role="alert">
            <p>Revisá {listaErrores.length === 1 ? "este dato" : `estos ${listaErrores.length} datos`}:</p>
            <ul>
              {listaErrores.map(([name, msg]) => (
                <li key={name}><a href={`#f-${name}`}>{msg}</a></li>
              ))}
            </ul>
          </div>
        )}

        {paso === pasos.length - 1 && (
          <>
            <dl className="sf-revision">
              {campos
                .filter((c) => c.paso < pasos.length - 1 && (!c.si || c.si(datos)) && datos[c.name])
                .map((c) => (
                  <div key={c.name}>
                    <dt>{c.label}</dt>
                    <dd>{mostrar(c, datos[c.name])}</dd>
                  </div>
                ))}
            </dl>
            <p className="sf-editar">
              ¿Algo no está bien?{" "}
              {pasos.slice(0, -1).map((p, i) => (
                <button key={p} type="button" className="link" onClick={() => irA(i)}>Editar {p.toLowerCase()}</button>
              ))}
            </p>

            <div className="sf-privacidad" id="aviso-privacidad">
              <h3>Cómo usamos estos datos</h3>
              <p>
                Responsable: <Pendiente valor={site.titular}>nombre y domicilio del responsable</Pendiente>.
                Usamos la información solo para gestionar tu aviso de siniestro y comunicarnos con vos y con la
                compañía aseguradora involucrada. Los datos marcados con * son necesarios para hacerlo; si no
                los brindás no podemos gestionar el aviso. Podés ejercer tus derechos de acceso, rectificación
                y supresión (Ley 25.326). Más información en{" "}
                <Link to="/legales#privacidad">Privacidad</Link>.
              </p>
            </div>
          </>
        )}

        <div className="sf-campos">
          {camposPaso.map((c) => (
            <Campo key={c.name} c={c} valor={datos[c.name]} error={errores[c.name]} onChange={onChange} onBlur={onBlur(c)} />
          ))}
        </div>

        {estado === "sin-configurar" && (
          <div className="sf-resultado sf-resultado--aviso" role="alert">
            <h3>El envío en línea todavía no está habilitado</h3>
            <p>
              Tu aviso <strong>no fue enviado</strong>. Copiá el resumen y mandalo por WhatsApp o email, o
              llamanos. Tus datos siguen en esta página.
            </p>
            <div className="sf-alternativas">
              <button type="button" className="btn btn--primario" onClick={copiarResumen}>
                {copiado ? "Resumen copiado" : "Copiar resumen"}
              </button>
              <a className="btn btn--borde" href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp aria-hidden /> WhatsApp
              </a>
              <a className="btn btn--borde" href={`mailto:${site.email}`}>Email</a>
            </div>
          </div>
        )}
        {estado === "error" && (
          <div className="sf-resultado sf-resultado--error" role="alert">
            <h3>No pudimos enviar tu aviso</h3>
            <p>
              Revisá tu conexión e intentá de nuevo. Si el problema sigue, comunicate por WhatsApp al{" "}
              {site.whatsapp.mostrar} o por teléfono al {site.telefono.mostrar}. Tus datos siguen en esta página.
            </p>
          </div>
        )}

        <div className="sf-nav">
          {paso > 0 && (
            <button type="button" className="btn btn--borde" onClick={() => irA(paso - 1)}>
              Volver
            </button>
          )}
          <button type="submit" className="btn btn--primario" disabled={estado === "enviando"}>
            {paso < pasos.length - 1 ? "Continuar" : estado === "enviando" ? "Enviando…" : "Enviar aviso"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SiniestroForm;
