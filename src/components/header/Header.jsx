import React, { useState } from "react";
import "./Header.css"
import { Link, NavLink } from "react-router-dom";
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
                <Link to="/">
                <img src="./logo original.png" alt="logo" width={120} />
                </Link>
                <OutsideClickHandler onOutsideClick={() => {
                    setMenuOpened(false)
                }}>
                <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                    <a href="/#value">Nosotros</a>
                    <a href="/#contact-us">Contactanos</a>
                    <a href="/#get-started">Contacta</a>
                    <NavLink to="Seguros">Seguros</NavLink>
                    <button className="button">
                    <a href="/#get-started">Cotiza Ya!</a>
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