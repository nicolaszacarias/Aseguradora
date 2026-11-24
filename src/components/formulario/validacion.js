// Definición y validación de los campos del aviso de siniestro.
// Se mantienen los `name` del formulario original para no romper una plantilla de EmailJS existente.

export const pasos = ["Tus datos", "Vehículo y conductor", "El siniestro", "Revisión y envío"];

const companias = [
  "El Norte Seguros",
  "Zurich",
  "Sancor Seguros",
  "Río Uruguay Seguros (RUS)",
  "Seguros Rivadavia",
  "Federación Patronal",
  "Otra",
];

export const campos = [
  // Paso 1
  { paso: 0, name: "nombre_asegurado", label: "Nombre y apellido", required: true, autoComplete: "name", min: 3 },
  { paso: 0, name: "dni", label: "DNI", required: true, inputMode: "numeric", patron: /^\d{7,8}$/, patronMsg: "Ingresá el DNI sin puntos, con 7 u 8 números.", limpiar: /[.\s]/g },
  { paso: 0, name: "telefono", label: "Teléfono", type: "tel", required: true, autoComplete: "tel", patron: /^\+?[\d\s()-]{8,20}$/, patronMsg: "Ingresá un teléfono con código de área, por ejemplo 351 555-1234." },
  { paso: 0, name: "email", label: "Email", type: "email", required: true, autoComplete: "email", patron: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, patronMsg: "Ingresá un email válido, por ejemplo nombre@correo.com." },
  { paso: 0, name: "asegurado_compania", label: "Compañía aseguradora", type: "select", required: true, opciones: companias },
  { paso: 0, name: "poliza", label: "Número de póliza", ayuda: "Figura en tu póliza o en la app de tu compañía." },

  // Paso 2
  { paso: 1, name: "vehiculo", label: "Marca y modelo del vehículo", required: true },
  { paso: 1, name: "patente", label: "Patente", required: true, patron: /^([A-Z]{3}\d{3}|[A-Z]{2}\d{3}[A-Z]{2}|[A-Z]\d{3}[A-Z]{3}|\d{3}[A-Z]{3})$/i, patronMsg: "Ingresá la patente sin espacios, por ejemplo AB123CD o ABC123.", limpiar: /[\s-]/g },
  { paso: 1, name: "asegurado_nro_licencia", label: "Número de licencia del conductor" },
  { paso: 1, name: "asegurado_categoria", label: "Categoría de la licencia", ayuda: "Por ejemplo B1." },
  { paso: 1, name: "asegurado_fecha_vencimiento", label: "Vencimiento de la licencia", type: "date" },

  // Paso 3
  { paso: 2, name: "fecha_siniestro", label: "Fecha del siniestro", type: "date", required: true, noFutura: true },
  { paso: 2, name: "hora_siniestro", label: "Hora aproximada", type: "time", required: true },
  { paso: 2, name: "lugar_siniestro", label: "Lugar", required: true, ancho: true, ayuda: "Calle y altura o intersección, y localidad." },
  { paso: 2, name: "tipo_siniestro", label: "Tipo de siniestro", type: "select", required: true, opciones: ["Choque o colisión", "Robo total", "Robo parcial", "Incendio", "Cristales", "Granizo", "Otro"] },
  { paso: 2, name: "hubo_tercero", label: "¿Hubo otro vehículo o persona involucrada?", type: "radio", required: true, opciones: ["Sí", "No"] },
  { paso: 2, name: "tercero_compania", label: "Compañía del tercero", si: (d) => d.hubo_tercero === "Sí" },
  { paso: 2, name: "tercero_patente", label: "Patente del tercero", si: (d) => d.hubo_tercero === "Sí" },
  { paso: 2, name: "tercero_nro_licencia", label: "Licencia del tercero", si: (d) => d.hubo_tercero === "Sí" },
  {
    paso: 2, name: "lesionados", label: "¿Hubo personas lesionadas?", type: "radio", required: true, opciones: ["Sí", "No", "No sé"],
    ayuda: "Solo necesitamos saber si las hubo. No incluyas diagnósticos ni datos de salud en este formulario.",
  },
  {
    paso: 2, name: "descripcion", label: "¿Qué pasó?", type: "textarea", required: true, ancho: true, min: 20, max: 2000,
    ayuda: "Contalo con tus palabras: cómo ocurrió, qué daños hubo y si intervino la policía.",
  },

  // Paso 4
  { paso: 3, name: "confirmacion", label: "Confirmo que la información es correcta.", type: "checkbox", required: true },
  { paso: 3, name: "privacidad", label: "Leí cómo se usan mis datos y acepto que se compartan con la compañía aseguradora para gestionar el aviso.", type: "checkbox", required: true },
];

const hoy = () => new Date().toISOString().slice(0, 10);

export function validar(c, valor) {
  if (!c) return "";
  if (c.type === "checkbox") return c.required && !valor ? `Marcá la casilla: «${c.label}»` : "";
  const v = String(valor ?? "").trim();
  if (!v) return c.required ? `Completá: ${c.label}.` : "";
  if (c.min && v.length < c.min) return `${c.label}: escribí al menos ${c.min} caracteres.`;
  if (c.patron && !c.patron.test(c.limpiar ? v.replace(c.limpiar, "") : v)) return c.patronMsg;
  if (c.noFutura && v > hoy()) return `${c.label}: no puede ser posterior a hoy.`;
  return "";
}

// Muestra fechas como dd/mm/aaaa (el input las guarda como aaaa-mm-dd).
export const mostrar = (c, v) => (c.type === "date" && v ? v.split("-").reverse().join("/") : v);

export function armarResumen(datos) {
  const lineas = campos
    .filter((c) => c.type !== "checkbox" && (!c.si || c.si(datos)) && datos[c.name])
    .map((c) => `${c.label}: ${mostrar(c, datos[c.name])}`);
  return ["Aviso de siniestro", ...lineas].join("\n");
}
