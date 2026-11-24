import { Link } from "react-router-dom";
import secures from "../../utils/secures.jsx";
import "./Secures.css";

export const slug = (t) =>
  t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-");

const SegurosResumen = () => (
  <section className="seccion seccion--niebla" aria-labelledby="sr-titulo">
    <div className="contenedor">
      <div className="sr-cabecera">
        <div>
          <h2 id="sr-titulo">Seguros para cada etapa</h2>
          <p className="intro">
            Personas, vehículos, hogares y empresas. Te asesoramos para elegir la cobertura que necesitás.
          </p>
        </div>
        <Link className="btn btn--borde" to="/seguros">Ver todos los seguros</Link>
      </div>
      <ul className="sr-grid">
        {secures.map((s) => (
          <li key={s.heading}>
            <Link to={`/seguros#${slug(s.heading)}`} className="sr-item">
              <span className="sr-icono" aria-hidden>{s.icon}</span>
              <span>{s.heading}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SegurosResumen;
