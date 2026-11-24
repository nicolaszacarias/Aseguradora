import "./Companies.css";

const companias = [
  ["north.png", "El Norte Seguros"],
  ["Zurich.png", "Zurich"],
  ["sancoseg.png", "Sancor Seguros"],
  ["Rus.png", "Río Uruguay Seguros (RUS)"],
  ["rivadavia1.png", "Seguros Rivadavia"],
  ["FederacionP.png", "Federación Patronal Seguros"],
];

const Companies = () => (
  <section className="co-wrapper" aria-labelledby="co-titulo">
    <div className="contenedor co-container">
      <h2 id="co-titulo" className="co-titulo">Compañías con las que trabajamos</h2>
      <ul className="co-lista">
        {companias.map(([img, nombre]) => (
          <li key={img}>
            <img src={`/${img}`} alt={nombre} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Companies;
