import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./poliza.css";

const SiniestroForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "tu_service_id",   // Reemplazá con tu Service ID de EmailJS
        "tu_template_id",  // Reemplazá con tu Template ID de EmailJS
        form.current,
        "tu_public_key"    // Reemplazá con tu Public Key de EmailJS
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
        {/* ===========================
            BLOQUES SUPERIORES: ASEGURADO / TERCERO
            =========================== */}

        {/* BLOQUE: DATOS DEL ASEGURADO */}
        <div className="bloque-siniestro">
          <h3>Datos del Asegurado</h3>

          <label>Compañía aseguradora</label>
          <input type="text" name="asegurado_compania" required />

          <label>Número de licencia</label>
          <input type="text" name="asegurado_nro_licencia" required />

          <label>Categoría</label>
          <input type="text" name="asegurado_categoria" required />

          <label>Localidad de emisión</label>
          <input type="text" name="asegurado_localidad_emision" required />

          <label>Fecha de emisión</label>
          <input type="date" name="asegurado_fecha_emision" required />

          <label>Fecha de vencimiento</label>
          <input type="date" name="asegurado_fecha_vencimiento" required />
        </div>

        {/* BLOQUE: DATOS DEL TERCERO */}
        <div className="bloque-siniestro">
          <h3>Datos del Tercero</h3>

          <label>Compañía aseguradora</label>
          <input type="text" name="tercero_compania" required />

          <label>Número de licencia</label>
          <input type="text" name="tercero_nro_licencia" required />

          <label>Categoría</label>
          <input type="text" name="tercero_categoria" required />

          <label>Localidad de emisión</label>
          <input type="text" name="tercero_localidad_emision" required />

          <label>Fecha de emisión</label>
          <input type="date" name="tercero_fecha_emision" required />

          <label>Fecha de vencimiento</label>
          <input type="date" name="tercero_fecha_vencimiento" required />
        </div>

        {/* ===========================
            BLOQUE INFERIOR: CONTACTO / VEHÍCULO / SINIESTRO
            =========================== */}

        <div className="full-width" style={{ marginTop: "10px" }}>
          <h3 style={{ color: "#003366", marginBottom: "10px" }}>
            Datos de contacto, vehículo y siniestro
          </h3>
        </div>

        {/* COLUMNA IZQUIERDA: CONTACTO + VEHÍCULO */}
        <div className="form-col">
          <label>Nombre y apellido</label>
          <input type="text" name="nombre_asegurado" required />

          <label>DNI</label>
          <input type="text" name="dni" required />

          <label>Teléfono</label>
          <input type="tel" name="telefono" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Marca y modelo del vehículo</label>
          <input type="text" name="vehiculo" required />

          <label>Patente</label>
          <input type="text" name="patente" required />

          <label>Lugar del siniestro</label>
          <input type="text" name="lugar_siniestro" required />
        </div>

        {/* COLUMNA DERECHA: DETALLE DEL SINIESTRO + ADJUNTOS */}
        <div className="form-col">
          <label>Fecha del siniestro</label>
          <input type="date" name="fecha_siniestro" required />

          <label>Hora del siniestro</label>
          <input type="time" name="hora_siniestro" required />

          <label>Tipo de siniestro</label>
          <select name="tipo_siniestro" required>
            <option value="">Seleccionar...</option>
            <option value="Robo Total">Robo total</option>
            <option value="Robo Parcial">Robo parcial</option>
            <option value="Colisión">Colisión</option>
            <option value="Incendio">Incendio</option>
            <option value="Cristales">Cristales</option>
            <option value="Otro">Otro</option>
          </select>

          <label>Descripción del siniestro</label>
          <textarea name="descripcion" rows="5" required />

          <label>Adjuntar documentación</label>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#555",
              marginTop: "-8px",
              marginBottom: "6px",
            }}
          >
            Adjuntá fotos del siniestro, carnet de conducir, póliza, cédula
            verde/azul y cualquier otro archivo relevante.
          </p>
          <input type="file" name="documentos" multiple />

          <label style={{ marginTop: "10px" }}>
            <input type="checkbox" name="confirmacion" required /> Confirmo que
            la información proporcionada es correcta.
          </label>

          <button
            type="submit"
            className="button"
            style={{ marginTop: "12px" }}
          >
            Enviar denuncia
          </button>
        </div>
      </form>
    </div>
  );
};

export default SiniestroForm;
