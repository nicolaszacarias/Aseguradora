import { Link } from "react-router-dom";
import "./GuiaSiniestro.css";

// Plazo: Ley 17.418, art. 46 ("dentro de los tres días de conocerlo").
export const pasosSiniestro = [
  {
    titulo: "Avisá a tu compañía aseguradora",
    texto:
      "La Ley de Seguros establece que el asegurado debe comunicar el siniestro a la aseguradora dentro de los 3 días de conocerlo (art. 46, Ley 17.418). Usá los canales que figuran en tu póliza.",
  },
  {
    titulo: "Reuní la información",
    texto:
      "Número de póliza, fecha, hora y lugar, datos del conductor y del tercero si lo hubo, y fotos de los daños. La compañía puede pedirte información adicional.",
  },
  {
    titulo: "Contanos qué pasó",
    texto:
      "Te orientamos y hacemos el seguimiento del trámite con la compañía. Podés escribirnos o completar nuestro formulario.",
  },
];

const GuiaSiniestro = () => (
  <section className="seccion gs-wrapper" aria-labelledby="gs-titulo">
    <div className="contenedor">
      <h2 id="gs-titulo">¿Tuviste un siniestro?</h2>
      <p className="gs-intro">Si hay personas lesionadas o riesgo inmediato, primero llamá al 911.</p>
      <ol className="gs-pasos">
        {pasosSiniestro.map((p) => (
          <li key={p.titulo}>
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </li>
        ))}
      </ol>
      <div className="gs-acciones">
        <Link className="btn btn--claro" to="/siniestro">Completar formulario de siniestro</Link>
        <p>
          Nuestro formulario nos avisa a nosotros como asesores.{" "}
          <strong>No reemplaza la denuncia ante tu compañía aseguradora.</strong>
        </p>
      </div>
    </div>
  </section>
);

export default GuiaSiniestro;
