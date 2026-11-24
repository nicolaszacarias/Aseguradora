import { FaWhatsapp } from "react-icons/fa";
import { site } from "../../utils/site";
import "./Buttonwh.css";

const WhatsAppButton = () => (
  <a href={site.whatsapp.href} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp size={30} aria-hidden />
    <span className="visualmente-oculto">Escribinos por WhatsApp (abre otra pestaña)</span>
  </a>
);

export default WhatsAppButton;
