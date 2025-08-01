import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./poliza.css";

const SiniestroForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "tu_service_id",       // <- reemplazá con tu ID de EmailJS
      "tu_template_id",      // <- reemplazá con tu template
      form.current,
      "tu_public_key"        // <- reemplazá con tu public key
    ).then(
      () => alert("Formulario enviado con éxito"),
      (error) => alert("Error al enviar el formulario: " + error.text)
    );

    e.target.reset();
  };

  return (
    <div className="siniestro-form-wrapper">
      <h2>Denuncia de Siniestro</h2>
      <form ref={form} onSubmit={sendEmail} className="siniestro-form">
        <label>Nombre completo</label>
        <input type="text" name="nombre" required />

        <label>Correo electrónico</label>
        <input type="email" name="email" required />

        <label>Teléfono de contacto</label>
        <input type="tel" name="telefono" required />

        <label>Fecha del siniestro</label>
        <input type="date" name="fecha_siniestro" required />

        <label>Tipo de siniestro</label>
        <select name="tipo_siniestro" required>
          <option value="">Seleccionar...</option>
          <option value="Choque">Choque</option>
          <option value="Robo">Robo</option>
          <option value="Incendio">Incendio</option>
          <option value="Otro">Otro</option>
        </select>

        <label>Descripción del siniestro</label>
        <textarea name="descripcion" rows="5" required></textarea>

        <button type="submit">Enviar denuncia</button>
      </form>
    </div>
  );
};

export default SiniestroForm;
