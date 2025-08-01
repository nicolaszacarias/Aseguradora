import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const imagenes = [
    "/contact.jpg",
    "/contact1.webp",
    "/contact2.jpg",
    "/contact3.jpg"
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, 15000); // 6 segundos

    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  const fondoActual = {
    backgroundImage: `url(${imagenes[indice]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out"
  };

  return (
    <section className="hero-wrapper" style={fondoActual}>
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="herostar hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Descubrí <br />
              Tu mejor <br /> Seguro
            </h1>
          </div>
          <div className="hero-des herostar">
            <span className="secondaryText white-text">
              Protegé lo que más importa con nuestros seguros a medida.
            </span>
            <span className="secondaryText white-text">
              Olvidate de todas las dificultades de encontrar un seguro para vos.
            </span>
          </div>
          <a
            className="button"
            href="https://www.clientes.polko.com.ar/MjQ5OjE3MDg="
          >
            Cotizá Ya!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
