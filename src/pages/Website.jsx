import React from "react";

import Hero from "../components/hero/Hero";
// import "./App.css";
import Value from "../components/value/Value";
import Contact from "../components/contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";

import Companies from "../components/companies/Companies";
// import SecureCarousel from "../components/Carrusel/Carrusel";
const Website = () => {
    return (
        <div className="App">
        <div>
          <div className="white-gradient"/>
        {/* <Header/> */}
        <Hero/>
        </div>
        <Companies/>
        <Value/>
        {/* <SecureCarousel/> */}
        <Contact/>
        <GetStarted/>
        {/* <Footer/> */}
      </div>
    )
}

export default Website