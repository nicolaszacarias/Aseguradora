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
                    <span className="secondaryText">3515214529</span> 
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
                    <span className="secondaryText">3515214529</span>
                  </div>
                </div>
                {/* <button>RECORDATORIO BOTON WHATSAPP</button> */}
                <a href="https://wa.link/nkwio8">
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
          <div className="image-container">
            <img src="./contacto10.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;