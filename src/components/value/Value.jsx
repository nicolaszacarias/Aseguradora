import data from "../../utils/accordion.jsx";
import "./Value.css";

const Value = () => (
  <section id="nosotros" className="seccion v-wrapper" aria-labelledby="v-titulo">
    <div className="contenedor v-grid">
      <figure className="v-foto">
        <img
          src="/value.png"
          alt="Asesor de Asegurar trabajando en la oficina"
          loading="lazy"
          width="600"
          height="700"
        />
      </figure>

      <div>
        <h2 id="v-titulo">Asesoramiento en seguros, con varias compañías para comparar.</h2>
        <p className="intro">
          Te ayudamos a entender qué cubre cada póliza, comparamos alternativas y seguimos a tu lado
          después de contratar.
        </p>

        <ul className="v-lista">
          {data.map((item) => (
            <li key={item.heading}>
              <span className="v-icono" aria-hidden>{item.icon}</span>
              <div>
                <h3>{item.heading}</h3>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Value;
