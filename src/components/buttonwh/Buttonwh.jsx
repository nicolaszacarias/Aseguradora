import { FaWhatsapp } from 'react-icons/fa';
import "./Buttonwh.css";
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Acción a realizar al hacer clic en el botón de WhatsApp
    window.open("https://wa.link/ofe549", '_blank');
  };

  return (
    <a
      href="https://wa.link/ofe549"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;