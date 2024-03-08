 import React from "react";
import "./Hero.css"
 const Hero = () => {   
     return (
         <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <h1>
                            Descubri <br/>
                            Tu mejor <br/> Seguro
                        </h1>
                    </div>
                    <div className="hero-des flexColStart">
                        <span className="secondaryText">Protege lo que más importa con nuestros seguros a medida.</span>
                        <span className="secondaryText">Olvidate de todas las dificultades de encontrar un seguro para vos</span>
                    </div>
                    <a className="button" href="https://www.clientes.polko.com.ar/MjQ5OjE3MDg=">
                        Cotiza Ya!
                        </a>

 
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />

                    </div>
                </div>
            </div>

         </section>
        // <div className="hero-container">
        //     {/* <img src="contact.jpg" alt="" /> */}
        //     <h1>Descubri tu mejor seguro</h1>
        //     <p>Que estas esperando?</p>
        //     <div>
        //     <a className="button" href="https://www.clientes.polko.com.ar/MjQ5OjE3MDg=">
        //                  Cotiza Ya!
        //                  </a>
        //     </div>

        // </div>
     )
 }

 export default Hero