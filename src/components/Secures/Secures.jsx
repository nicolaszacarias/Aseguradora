import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import secures, { categorias } from "../../utils/secures.jsx";
import { site } from "../../utils/site";
import { slug } from "./SegurosResumen";
import "./Secures.css";

const Secures = () => {
  const [filtro, setFiltro] = useState("Todos");
  const visibles = filtro === "Todos" ? secures : secures.filter((s) => s.categoria === filtro);

  return (
    <>
      <section className="pagina-cabecera">
        <div className="contenedor">
          <h1>Nuestros seguros</h1>
          <p className="intro">
            Una guía general de los seguros con los que trabajamos. Cada compañía define sus coberturas,
            exclusiones, sumas aseguradas y condiciones: antes de contratar te mostramos la propuesta
            concreta y te explicamos sus cláusulas.
          </p>
        </div>
      </section>

      <section className="seccion contenedor s-catalogo" aria-label="Catálogo de seguros">
        <div className="s-filtros" role="group" aria-label="Filtrar por tipo">
          {["Todos", ...categorias].map((c) => (
            <button
              key={c}
              type="button"
              className="s-chip"
              aria-pressed={filtro === c}
              onClick={() => setFiltro(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="visualmente-oculto" aria-live="polite">
          {visibles.length} seguros{filtro !== "Todos" ? ` en ${filtro}` : ""}
        </p>

        <ul className="s-grid">
          {visibles.map((s) => (
            <li key={s.heading} id={slug(s.heading)} className="s-card">
              <span className="s-icono" aria-hidden>{s.icon}</span>
              <p className="s-cat">{s.categoria}</p>
              <h2>{s.heading}</h2>
              <p className="s-detalle">{s.detail}</p>
              <a className="s-consulta" href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp aria-hidden /> Consultar por WhatsApp
                <span className="visualmente-oculto"> sobre seguro de {s.heading}</span>
              </a>
            </li>
          ))}
        </ul>

        <aside className="s-aviso">
          <h2>¿No encontrás lo que buscás?</h2>
          <p>Contanos qué querés asegurar y te decimos si podemos ayudarte.</p>
          <Link className="btn btn--primario" to="/#contacto">Ver formas de contacto</Link>
        </aside>
      </section>
    </>
  );
};

export default Secures;
