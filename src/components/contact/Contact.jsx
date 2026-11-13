import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Nuestro Contacto</span>
          <span className="primaryText">Al alcance de tu mano</span>
          <span className="secondaryText">
          Siempre estamos preparados para proporcionarte nuestro mejor servicio. 
          Creemos que al brindar seguridad a las personas, se vive mejor.{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                  <div className="flexStart">
                   <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div> 
                   <div className="flexColStart detail">
                     <span className="primaryText">Llamar</span>
                    <span className="secondaryText">+54 9 351 864-7777</span> 
                  </div> 
                </div> 
                <a href="tel:+543515214529" className="modex">
                 <div className="flexCenter button">Llamar ahora</div> 
                 </a>
              </div> 

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Whatsapp</span>
                    <span className="secondaryText">+54 9 351 864-7777</span>
                  </div>
                </div>
                {/* <button>RECORDATORIO BOTON WHATSAPP</button> */}
                <a href="https://wa.link/ofe549">
                <div className="flexCenter button">Chat now</div>
                </a>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div> */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">info@asegurarnet.com.ar</span>
                  </div>
                </div>
                <a href="mailto:info@asegurarnet.com.ar">
                <div className="flexCenter button">Message now</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
                <div className="map-container" style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
  <h3 className="primaryText" style={{ marginBottom: '1rem' }}>Estamos ubicados en:</h3>

  <iframe
    title="Ubicación Asegurarnet"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.6316333632023!2d-64.18338982481083!3d-31.419073296657636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a285bc3a9287%3A0xdd82d6b33c6e3db1!2sEnfermera%20Clermont%20170%2C%20X5000IUC%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1717090063096!5m2!1ses!2sar"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;