import { Link } from "react-router-dom";
import { site, ssn } from "../../utils/site";
import Pendiente from "../../utils/Pendiente";
import "./Footer.css";

const Footer = () => (
  <footer className="f-wrapper">
    <div className="contenedor f-grid">
      <div className="f-marca">
        <img src="/footer.png" alt={`${site.marca}, ${site.descriptor}`} width="150" height="87" />
        <p>
          <Pendiente valor={site.titular}>Nombre del productor o sociedad responsable</Pendiente>
          <br />
          {site.direccion}
        </p>
      </div>

      <nav aria-label="Pie de página">
        <h2 className="f-titulo">Sitio</h2>
        <ul>
          <li><Link to="/seguros">Seguros</Link></li>
          <li><Link to="/siniestro">Siniestros</Link></li>
          <li><Link to="/#contacto">Contacto</Link></li>
          <li><Link to="/legales">Información legal y privacidad</Link></li>
        </ul>
      </nav>

      <div>
        <h2 className="f-titulo">Contacto</h2>
        <ul>
          <li><a href={site.telefono.href}>Tel. {site.telefono.mostrar}</a></li>
          <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </div>
    </div>

    {/* Banda obligatoria para productores asesores en web (Res. SSN 225/2022 y 279/2022, Manual MACOP) */}
    <div className="f-ssn">
      <div className="contenedor f-ssn-grid">
        <p>
          N° de matrícula SSN
          <strong><Pendiente valor={site.matriculaSSN}>N.º de matrícula</Pendiente></strong>
        </p>
        <p>Departamento de Orientación<br />y Asistencia al Asegurado</p>
        <p><a href={`tel:${ssn.telefono.replaceAll("-", "")}`}><strong>{ssn.telefono}</strong></a></p>
        <p><a href={ssn.web} target="_blank" rel="noopener noreferrer"><strong>{ssn.webTexto}</strong></a></p>
      </div>
    </div>

    <div className="contenedor f-legal">
      <p>© {new Date().getFullYear()} {site.marca}. La información de este sitio es orientativa y no reemplaza las condiciones de cada póliza.</p>
    </div>
  </footer>
);

export default Footer;
