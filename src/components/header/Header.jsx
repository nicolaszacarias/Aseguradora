import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { site } from "../../utils/site";
import "./Header.css";

const enlaces = [
  { to: "/#nosotros", label: "Nosotros" },
  { to: "/seguros", label: "Seguros", nav: true },
  { to: "/siniestro", label: "Siniestros", nav: true },
  { to: "/#contacto", label: "Contacto" },
];

const Header = () => {
  const [abierto, setAbierto] = useState(false);
  const location = useLocation();

  useEffect(() => setAbierto(false), [location]);

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e) => e.key === "Escape" && setAbierto(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <header className="h-wrapper">
      <div className="contenedor h-container">
        <Link to="/" className="h-logo" aria-label={`${site.marca}, ${site.descriptor} — inicio`}>
          <img src="/logoaseguradora-ult.png" alt="" width="150" height="150" />
        </Link>

        <button
          type="button"
          className="h-toggle"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? <BiX size={28} aria-hidden /> : <BiMenuAltRight size={28} aria-hidden />}
          <span className="visualmente-oculto">{abierto ? "Cerrar menú" : "Abrir menú"}</span>
        </button>

        <nav id="menu-principal" className={`h-menu ${abierto ? "is-abierto" : ""}`} aria-label="Principal">
          <ul>
            {enlaces.map((e) => (
              <li key={e.to}>
                {e.nav ? <NavLink to={e.to}>{e.label}</NavLink> : <Link to={e.to}>{e.label}</Link>}
              </li>
            ))}
          </ul>
          <a className="btn btn--primario" href={site.cotizadorUrl} target="_blank" rel="noopener noreferrer">
            Cotizar online
            <span className="visualmente-oculto"> (abre el cotizador de Polko en otra pestaña)</span>
          </a>
        </nav>
        {abierto && <div className="h-velo" onClick={() => setAbierto(false)} aria-hidden />}
      </div>
    </header>
  );
};

export default Header;
