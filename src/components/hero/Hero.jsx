
import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="herostar hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>
                            Descubri <br/>
                            Tu mejor <br/> Seguro
                        </h1>
                    </div>
                    <div className="hero-des herostar">
                        <span className="secondaryText white-text">Protege lo que más importa con nuestros seguros a medida.</span>
                        <span className="secondaryText white-text">Olvidate de todas las dificultades de encontrar un seguro para vos</span>
                    </div>
                    <a className="button" href="https://www.clientes.polko.com.ar/MjQ5OjE3MDg=">
                        Cotiza Ya!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;