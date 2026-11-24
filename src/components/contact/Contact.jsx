import { useState } from "react";
import { MdCall, MdOutlineEmail, MdOutlinePlace } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "../../utils/site";
import Pendiente from "../../utils/Pendiente";
import "./Contact.css";

const MAPA_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.6316333632023!2d-64.18338982481083!3d-31.419073296657636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a285bc3a9287%3A0xdd82d6b33c6e3db1!2sEnfermera%20Clermont%20170%2C%20X5000IUC%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1717090063096!5m2!1ses!2sar";

const canales = [
  { icon: <FaWhatsapp />, titulo: "WhatsApp", dato: site.whatsapp.mostrar, href: site.whatsapp.href, accion: "Abrir chat", externo: true },
  { icon: <MdCall />, titulo: "Teléfono", dato: site.telefono.mostrar, href: site.telefono.href, accion: "Llamar" },
  { icon: <MdOutlineEmail />, titulo: "Email", dato: site.email, href: `mailto:${site.email}`, accion: "Escribir" },
];

const Contact = () => {
  // El mapa de Google se carga solo si la persona lo pide (privacidad y rendimiento).
  const [verMapa, setVerMapa] = useState(false);

  return (
    <section id="contacto" className="seccion" aria-labelledby="ct-titulo">
      <div className="contenedor ct-grid">
        <div>
          <h2 id="ct-titulo">Hablemos</h2>
          <p className="intro">Elegí el canal que te quede más cómodo. Si preferís, vení a la oficina.</p>
          <p className="ct-horario">
            Horario de atención: <Pendiente valor={site.horario}>horario a confirmar</Pendiente>
          </p>

          <ul className="ct-canales">
            {canales.map((c) => (
              <li key={c.titulo}>
                <a
                  className="ct-canal"
                  href={c.href}
                  {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="ct-icono" aria-hidden>{c.icon}</span>
                  <span className="ct-texto">
                    <span className="ct-titulo">{c.titulo}</span>
                    <span className="ct-dato">{c.dato}</span>
                  </span>
                  <span className="ct-accion" aria-hidden>{c.accion}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ct-mapa">
          {verMapa ? (
            <iframe
              title={`Mapa: ${site.direccion}`}
              src={MAPA_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="ct-mapa-placeholder">
              <MdOutlinePlace aria-hidden size={40} />
              <p className="ct-direccion">{site.direccion}</p>
              <div className="ct-mapa-botones">
                <button type="button" className="btn btn--primario" onClick={() => setVerMapa(true)}>
                  Ver mapa
                </button>
                <a className="btn btn--borde" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Cómo llegar
                </a>
              </div>
              <p className="ct-mapa-nota">El mapa lo provee Google Maps y se carga solo si lo pedís.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
