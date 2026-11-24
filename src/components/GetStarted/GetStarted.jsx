import { site } from "../../utils/site";
import "./GetStarted.css";

const GetStarted = () => (
  <section id="cotizar" className="g-wrapper" aria-labelledby="g-titulo">
    <div className="contenedor">
      <div className="g-panel">
        <div>
          <h2 id="g-titulo">Pedí tu cotización</h2>
          <p>
            Completá tus datos en el cotizador online y compará opciones. Si tenés dudas, te ayudamos a
            interpretarlas antes de decidir.
          </p>
        </div>
        <div className="g-accion">
          <a className="btn btn--claro" href={site.cotizadorUrl} target="_blank" rel="noopener noreferrer">
            Ir al cotizador
            <span className="visualmente-oculto"> (abre otra pestaña)</span>
          </a>
          <p className="g-nota">
            El cotizador es de Polko, un servicio externo con sus propias condiciones y política de privacidad.
            Una cotización no es un contrato ni otorga cobertura.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GetStarted;
