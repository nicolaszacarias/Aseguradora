import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Empeza con Asegurar</span>
          <span className="secondaryText">
            No dejes nada al azar, asegura un futuro tranquilo con nosotros.   
            <br />
            Completa los datos y ya esta!
          </span>
          <button className="button">
            <a href="https://www.clientes.polko.com.ar/MjQ5OjE3MDg=">Comenza!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;