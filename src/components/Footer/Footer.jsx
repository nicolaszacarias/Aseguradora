import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
          Servicio de Atención al Asegurado: Resolución 225/22
        <br />
        La entidad aseguradora dispone de un Servicio de Atención al Asegurado que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes. 
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Informacion</span>
          <span className="secondaryText">Enfermera Clermont 170 - CP 5003 - Córdoba</span>
          <div className="flexCenter f-menu">
            <span>El Servicio de Atención al Asegurado está integrado por:
            <br />
            RESPONSABLE: Gustavo, Vincent – Tel.: 3515214529 – Int.: 53070 –  info@asegurarnet.com.ar
            <br />
            SUPLENTE: Barolo, Mariela – Tel.: 3515214529 – Int.: 53120 –  info@asegurarnet.com.ar
            <br />
            En caso de que existiera un reclamo ante la entidad aseguradora y que el mismo no haya sido resuelto o haya sido desestimado, total o parcialmente, o que haya sido denegada su admisión, podrá comunicarse con la Superintendencia de Seguros de la Nación por teléfono al 0800-666-8400, correo electrónico a consultas@ssn.gob.ar o formulario disponible en la página argentina.gob.ar/ssn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

 //El Servicio de Atención al Asegurado está integrado por:
// RESPONSABLE: Calle, Graciela – Tel.: 03493-428500 – Int.: 53070 – SAA@sancorseguros.com
// SUPLENTE: Barolo, Mariela – Tel.: 03493-428500 – Int.: 53120 – SAA@sancorseguros.com
// En caso de que existiera un reclamo ante la entidad aseguradora y que el mismo no haya sido resuelto o haya sido desestimado, total o parcialmente, o que haya sido denegada su admisión, podrá comunicarse con la Superintendencia de Seguros de la Nación por teléfono al 0800-666-8400, correo electrónico a consultas@ssn.gob.ar o formulario disponible en la página argentina.gob.ar/ssn