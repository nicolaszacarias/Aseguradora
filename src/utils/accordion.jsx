import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
import { FaClock } from "react-icons/fa";
const data = [
  {
    icon: <HiShieldCheck/>,
    heading: "Asesoramiento personalizado",
    detail:
      "Los brokers ofrecen orientación especializada y adaptada a las necesidades individuales de cada cliente, proporcionando recomendaciones objetivas sobre las opciones de cobertura más adecuadas.",
  },
  {
    icon: <MdCancel />,
    heading: "Acceso a diversas opciones",
    detail:
      "Tenemos acceso a una amplia gama de opciones de cobertura de varias compañías aseguradoras, permitiendo comparaciones detalladas y negociaciones para obtener tarifas competitivas y coberturas adecuadas a tu persona.",
  },
  {
    icon: <FaClock />,
    heading: "Ahorro de tiempo",
    detail:
      "Elimina la necesidad de esperas y trámites tediosos al completar la contratación de forma rápida y eficiente en línea. Después de contratar el seguro, puedes actualizar la cobertura o tus datos de manera fácil y rápida, sin necesidad de acudir personalmente a una sucursal.",
  },
  {
    icon: <MdAnalytics />,
    heading: "Sencillez en realizar cambios",
    detail:
      "Una vez contratado el seguro, es posible realizar modificaciones o actualizaciones en línea, como cambios en la cobertura o en los datos del asegurado, sin necesidad de visitar una sucursal física.",
  },
];
// Facilidad para realizar modificaciones
export default data;