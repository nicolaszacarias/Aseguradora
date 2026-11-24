import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { site } from "../../utils/site";
import "./Hero.css";

const Hero = () => (
  <section className="hero" aria-labelledby="hero-titulo">
    <div className="contenedor hero-grid">
      <div className="hero-texto">
        <p className="hero-kicker">{site.descriptor} en Córdoba</p>
        <h1 id="hero-titulo">Elegí tu seguro con alguien que te lo explique.</h1>
        <p className="hero-bajada">
          Comparamos opciones de distintas compañías y te acompañamos mientras tu póliza está vigente,
          también cuando tenés un siniestro.
        </p>
        <div className="hero-acciones">
          <a className="btn btn--primario" href={site.cotizadorUrl} target="_blank" rel="noopener noreferrer">
            Cotizar online
            <span className="visualmente-oculto"> (abre otra pestaña)</span>
          </a>
          <a className="btn btn--borde" href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp aria-hidden size={20} /> Escribinos por WhatsApp
          </a>
        </div>
        <p className="hero-nota">
          La cotización online se hace en Polko, una plataforma externa. Una cotización no es un contrato
          ni otorga cobertura: la contratación y su vigencia dependen de la aceptación de la compañía aseguradora.
        </p>
      </div>

      <figure className="hero-foto">
        <img
          src="/contact3.jpg"
          alt="Nuestra oficina de Enfermera Clermont 170, con dos asesores trabajando en sus escritorios"
          width="1600"
          height="1200"
          fetchpriority="high"
        />
        <figcaption>
          <MdOutlinePlace aria-hidden size={22} />
          <span>
            Atención presencial en <strong>{site.direccion}</strong>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Hero;
