// import React, { useState } from "react";
// import "./Header.css"
// import { Link, NavLink } from "react-router-dom";
// import { BiMenuAltRight } from "react-icons/bi"
// import OutsideClickHandler from "react-outside-click-handler";
// const Header = () => {
//     const [menuOpened, setMenuOpened] = useState(false)

//     const getMenuStyles = (menuOpened) => {
//         if (document.documentElement.clientWidth <= 800)
//         {
//             return {right: !menuOpened && "-100%"}
//         }
//     }
//     return (
//         <section className="h-wrapper">
//             <div className="h-container flexCenter paddings innerWitdh">
//                 <Link to="/">
//                 <img src="./logux.png" alt="logo" width={150} />
//                 </Link>
//                 <OutsideClickHandler onOutsideClick={() => {
//                     setMenuOpened(false)
//                 }}>
//                 <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
//                     <a href="/#value">Nosotros</a>
//                     <a href="/#contact-us">Contactanos</a>
//                     {/* <a href="/#get-started">Contacta</a> */}
//                     <NavLink to="Seguros">Seguros</NavLink>
//                     <button className="button">
//                     <a href="/#get-started">Cotiza Ya!</a>
//                     </button>
//                 </div>
//                 </OutsideClickHandler>
//                 <div className="menu-icon"
//             onClick={() => setMenuOpened((prev)=> !prev)}>
//                     <BiMenuAltRight size={30}/>
//             </div>
//             </div>

//         </section>
//     )
// }

// export default Header



// import React, { useState } from "react";
// import "./Header.css"
// import { Link, NavLink } from "react-router-dom";
// import { BiMenuAltRight } from "react-icons/bi"
// import OutsideClickHandler from "react-outside-click-handler";

// const Header = () => {
//   const [menuOpened, setMenuOpened] = useState(false);
//   const getMenuStyles = (menuOpened) => {
//     if (document.documentElement.clientWidth <= 800)
//    {
//         return {right: !menuOpened && "-100%"}
//     }
// }

//   return (
//     <section className="h-wrapper" >
//       <div className="flexCenter innerWidth paddings h-container">
//         {/* logo */}
//         <Link to="/">
//         <img src="./logux.png" alt="logo" width={150} />
//         </Link>

//         {/* menu */}
//         <OutsideClickHandler
//           onOutsideClick={() => {
//             setMenuOpened(false);
//           }}
//         >
//           <div
//             // ref={menuRef}
//             className="flexCenter h-menu"
//             style={getMenuStyles(menuOpened)}
//           >
//                      <a href="/#value">Nosotros</a>
//                      <a href="/#contact-us">Contactanos</a>
//                      <NavLink to="Seguros">Seguros</NavLink>
//                     <button className="button">
//                    <a href="/#get-started">Cotiza Ya!</a>
//                 </button>
//           </div>
//         </OutsideClickHandler>

//         {/* for medium and small screens */}
//         <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
//           <BiMenuAltRight size={30} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;
import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section
      className={`h-wrapper ${menuOpened ? "menu-open" : ""}`} // Toggle class based on menuOpened
    >
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img src="./logux.png" alt="logo" width={150} />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a href="/#value">Nosotros</a>
            <a href="/#contact-us">Contáctanos</a>
            <NavLink to="/Seguros">Seguros</NavLink>
            <button className="button">
              <a href="/#get-started">Cotiza Ya!</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
