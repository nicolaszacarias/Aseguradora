import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./poliza.css";

const SiniestroForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "tu_service_id",   // <- reemplazá con tu Service ID de EmailJS
        "tu_template_id",  // <- reemplazá con tu Template ID de EmailJS
        form.current,
        "tu_public_key"    // <- reemplazá con tu Public Key
      )
      .then(
        () => alert("Formulario enviado con éxito ✅"),
        (error) => alert("Error al enviar el formulario ❌: " + error.text)
      );

    e.target.reset();
  };

  return (
    <div className="siniestro-form-wrapper">
      <h2>Denuncia de Siniestro</h2>
      <form ref={form} onSubmit={sendEmail} className="siniestro-form">

        {/* Columna Izquierda */}
        <div className="form-col">
          <label>Nombre y Apellido</label>
          <input type="text" name="nombre_asegurado" required />

          <label>DNI</label>
          <input type="text" name="dni" required />

          <label>Teléfono</label>
          <input type="tel" name="telefono" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Marca y Modelo</label>
          <input type="text" name="vehiculo" required />

          <label>Patente</label>
          <input type="text" name="patente" required />

          <label>Lugar del siniestro</label>
          <input type="text" name="lugar_siniestro" required />
        </div>

        {/* Columna Derecha */}
        <div className="form-col">
          <label>Fecha del siniestro</label>
          <input type="date" name="fecha_siniestro" required />

          <label>Hora del siniestro</label>
          <input type="time" name="hora_siniestro" required />

          <label>Tipo de siniestro</label>
          <select name="tipo_siniestro" required>
            <option value="">Seleccionar...</option>
            <option value="Robo Total">Robo Total</option>
            <option value="Robo Parcial">Robo Parcial</option>
            <option value="Colisión">Colisión</option>
            <option value="Incendio">Incendio</option>
            <option value="Cristales">Cristales</option>
            <option value="Otro">Otro</option>
          </select>

          <label>Descripción del siniestro</label>
          <textarea name="descripcion" rows="5" required></textarea>

          <label>Adjuntar documentación (opcional)</label>
          <input type="file" name="documentos" multiple />

          <label>
            <input type="checkbox" name="confirmacion" required /> Confirmo que la
            información proporcionada es correcta
          </label>

          <button type="submit" className="button">Enviar denuncia</button>
        </div>

      </form>
    </div>
  );
};

export default SiniestroForm;
