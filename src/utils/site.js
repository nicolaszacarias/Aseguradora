// Datos comerciales y legales del sitio, en un solo lugar.
// Todo valor `null` está PENDIENTE de validación por el titular y se muestra marcado en la web.
export const site = {
  marca: "Asegurar",
  descriptor: "Asesores de Seguros",
  // Pendiente: razón social / nombre del productor o sociedad responsable del sitio.
  titular: null,
  cuit: null,
  // Pendiente: N.º de matrícula SSN del productor (o N.º de inscripción de la sociedad de productores).
  matriculaSSN: null,
  // El sitio original indica CP 5003 y el mapa X5000; se muestra sin CP hasta validar.
  direccion: "Enfermera Clermont 170, Córdoba",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Enfermera+Clermont+170,+C%C3%B3rdoba",
  email: "info@asegurarnet.com.ar",
  // Los números se conservan tal como estaban enlazados en el sitio original (ver informe: hay inconsistencia).
  telefono: { mostrar: "351 521-4529", href: "tel:+543515214529" },
  whatsapp: { mostrar: "+54 9 351 864-7777", href: "https://wa.link/ofe549" },
  horario: null,
  cotizadorUrl: "https://www.clientes.polko.com.ar/MjQ5OjE3MDg=",
};

export const ssn = {
  telefono: "0800-666-8400",
  web: "https://www.argentina.gob.ar/ssn",
  webTexto: "www.argentina.gob.ar/ssn",
  email: "consultas@ssn.gob.ar",
};
