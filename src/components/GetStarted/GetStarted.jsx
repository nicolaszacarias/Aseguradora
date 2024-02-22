import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Empeza con nombre de empresa</span>
          <span className="secondaryText">
            Comenza y completa los datos y ya esta!
            <br />
            Cotiza y encontra un seguro justo para tu auto!
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