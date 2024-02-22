import React, { useState } from "react";
import "./Header.css"
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && "-100%"}
        }
    }
    return (
        <section className="h-wrapper">
            <div className="h-container flexCenter paddings innerWitdh">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => {
                    setMenuOpened(false)
                }}>
                <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                    <a href="#value">Nosotros</a>
                    <a href="#contact-us">Contactanos</a>
                    <a href="#get-started">Cotiza Ya!</a>
                    <button className="button">
                    <a href="#contact-us">Contacta</a>
                    </button>
                </div>
                </OutsideClickHandler>
                <div className="menu-icon" 
            onClick={() => setMenuOpened((prev)=> !prev)}>
                    <BiMenuAltRight size={30}/>
            </div>
            </div>

        </section>
    )
}

export default Header