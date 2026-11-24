import { FaCar, FaHome, FaHeart } from "react-icons/fa";
import { MdOutlineLocalHospital, MdAddBusiness } from "react-icons/md";
import { IoAccessibilitySharp, IoBusiness } from "react-icons/io5";
import { GiFactory } from "react-icons/gi";
import { HiOutlineScale } from "react-icons/hi";

export const categorias = ["Personas", "Vehículo y hogar", "Empresas"];

// Descripciones generales del tipo de seguro. No describen una póliza concreta:
// coberturas, exclusiones, sumas y condiciones dependen de cada compañía y contrato.
const secures = [
  {
    icon: <FaCar />,
    heading: "Automóvil",
    categoria: "Vehículo y hogar",
    detail:
      "Desde la responsabilidad civil obligatoria hacia terceros hasta coberturas más amplias que pueden incluir daños al propio vehículo, según el plan elegido.",
  },
  {
    icon: <FaHome />,
    heading: "Hogar",
    categoria: "Vehículo y hogar",
    detail:
      "Protección para la vivienda y su contenido frente a riesgos como incendio, robo o daños por agua, de acuerdo con lo que contemple cada póliza.",
  },
  {
    icon: <FaHeart />,
    heading: "Vida",
    categoria: "Personas",
    detail:
      "Prestación económica para los beneficiarios que designes en caso de fallecimiento. Algunos planes incluyen coberturas adicionales, como invalidez.",
  },
  {
    icon: <IoAccessibilitySharp />,
    heading: "Accidentes personales",
    categoria: "Personas",
    detail:
      "Cobertura ante accidentes que provoquen lesiones, incapacidad o fallecimiento, con los alcances y sumas que fije cada contrato.",
  },
  {
    icon: <MdOutlineLocalHospital />,
    heading: "Salud",
    categoria: "Personas",
    detail:
      "Seguros vinculados a gastos o prestaciones médicas ante enfermedad o accidente. Las prestaciones incluidas varían según el producto.",
  },
  {
    icon: <HiOutlineScale />,
    heading: "Responsabilidad civil",
    categoria: "Empresas",
    detail:
      "Cubre reclamos de terceros por daños materiales o personales que puedas causar en tu actividad, dentro de los límites de la póliza.",
  },
  {
    icon: <MdAddBusiness />,
    heading: "ART",
    categoria: "Empresas",
    detail:
      "Aseguradora de Riesgos del Trabajo para empleadores: prevención y prestaciones ante accidentes laborales y enfermedades profesionales, según la normativa vigente.",
  },
  {
    icon: <IoBusiness />,
    heading: "Integral de comercio",
    categoria: "Empresas",
    detail:
      "Agrupa en una póliza riesgos habituales de un local comercial, como incendio, robo, daños por agua y responsabilidad civil.",
  },
  {
    icon: <GiFactory />,
    heading: "Integral de industria",
    categoria: "Empresas",
    detail:
      "Para establecimientos productivos: puede combinar incendio, daños a maquinaria, responsabilidad civil y pérdida de beneficios, según el plan.",
  },
];

export default secures;
