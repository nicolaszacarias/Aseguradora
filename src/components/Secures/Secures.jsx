import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import secures from "../../utils/secures.jsx";
import "../value/Value.css";
import "./Secures.css"
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="flexColStart v-right">
          <span className="primaryText">Nuestros Seguros Disponibles:</span>

{/* 
          <span className="secondaryText">
            Simpre en dispocision para vos.
            <br />
            Nos comprometemos como empresa al mejor de tus cuidados.
          </span> */}

            <div className="cards">
            {secures.map((item, i) => {
              return (
               <div key={i} className="card">
                <h3 className="pichu">{item.heading} {item.icon}</h3>
                <p>{item.detail}</p>
               </div>
            )})}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Value;