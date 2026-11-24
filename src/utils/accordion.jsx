import { HiShieldCheck } from "react-icons/hi";
import { MdCompareArrows, MdSupportAgent } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

// Servicios que presta un productor asesor (Ley 22.400, art. 10). Sin promesas de precio ni de resultado.
const data = [
  {
    icon: <HiShieldCheck />,
    heading: "Asesoramiento personalizado",
    detail:
      "Te explicamos las opciones disponibles para tu caso y las cláusulas de cada póliza, para que decidas con información clara.",
  },
  {
    icon: <MdCompareArrows />,
    heading: "Varias compañías para comparar",
    detail:
      "Trabajamos con distintas aseguradoras, así podés comparar coberturas y costos antes de elegir.",
  },
  {
    icon: <FaRegFileAlt />,
    heading: "Gestiones durante la vigencia",
    detail:
      "Te acompañamos en renovaciones, cambios de datos o de cobertura y consultas sobre tus derechos y obligaciones como asegurado.",
  },
  {
    icon: <MdSupportAgent />,
    heading: "Acompañamiento ante un siniestro",
    detail:
      "Te orientamos sobre cómo y cuándo avisar a tu aseguradora y qué documentación reunir. La denuncia formal se registra ante la compañía.",
  },
];

export default data;
