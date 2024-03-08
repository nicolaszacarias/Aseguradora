import { FaCar, FaHome, FaDropbox } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import { IoAccessibilitySharp, IoBusiness  } from "react-icons/io5";
import { MdAddBusiness } from "react-icons/md";
import { GiFactory } from "react-icons/gi";

const secures = [
  {
    icon: <FaCar />
    ,
    heading: "Automovil",
    detail:
      "Cubre daños a terceros en caso de accidentes de tránsito, así como también ofrece cobertura para daños propios del vehículo asegurado.",
  },
  {
    icon: <FaHeart />,
    heading: "Vida",
    detail:
      "Ofrece protección financiera a los beneficiarios designados en caso de fallecimiento del asegurado. Puede incluir también cobertura por invalidez total o parcial.",
  },
  {
    icon: <FaHome />,
    heading: "Hogar",
    detail:
      "Protege la vivienda y los bienes personales contra eventos como incendios, robos, daños por agua, entre otros.",
  },
  {
    icon: <MdOutlineLocalHospital />,
    heading: "Salud",
    detail:
      "Proporciona cobertura médica y hospitalaria en caso de enfermedad o accidente, incluyendo consultas médicas, medicamentos, internaciones, entre otros servicios.",
  },
  {
    icon: <FaDropbox />,
    heading: "Responsabilidad civil",
    detail:
      "Cubre los daños materiales y personales que el asegurado pueda causar a terceros involucrados en un accidente.",
  },
  {
    icon: <IoAccessibilitySharp />,
    heading: "Accidentes personales",
    detail:
      "Ofrece cobertura en caso de accidentes que resulten en lesiones corporales, incapacidad temporal o permanente, e incluso fallecimiento.",
  },
  {
    icon: <MdAddBusiness />,
    heading: "Comercio",
    detail:
      "Protege los bienes y la responsabilidad civil de comercios y empresas ante diversos riesgos como incendios, robos, daños materiales, entre otros.",
  },
  {
    icon: <IoBusiness/>,
    heading: "Integral de Comercio",
    detail:
      "Ofrece una protección integral para negocios, cubriendo riesgos como incendios, robos, daños por agua y responsabilidad civil.",
  },
  {
    icon: <GiFactory/>,
    heading: "Integral de Industria",
    detail:
      "Proporciona una protección completa para empresas manufactureras y de producción, abarcando riesgos como incendios, daños maquinaria, responsabilidad civil y pérdidas por interrupción de negocio.",
  },
];
export default secures;