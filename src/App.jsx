import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Secures from "./components/Secures/Secures";
import Website from "./pages/Website";
import SiniestroForm from "./components/formulario/Poliza";
import Legales from "./pages/Legales";

const titulos = {
  "/": "Asegurar | Asesores de Seguros en Córdoba",
  "/seguros": "Seguros | Asegurar",
  "/siniestro": "Siniestros | Asegurar",
  "/legales": "Información legal y privacidad | Asegurar",
};

// Al cambiar de página: título del documento y scroll arriba (salvo enlaces a #ancla).
const AlNavegar = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = titulos[pathname.toLowerCase()] ?? "Asegurar";
    if (!hash) window.scrollTo(0, 0);
    else document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [pathname, hash]);
  return null;
};

const NoEncontrada = () => (
  <section className="seccion contenedor">
    <h1>Página no encontrada</h1>
    <p className="intro">La dirección que buscás no existe o cambió.</p>
    <p style={{ marginTop: 24 }}><Link className="btn btn--primario" to="/">Ir al inicio</Link></p>
  </section>
);

function App() {
  return (
    <BrowserRouter>
      <AlNavegar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Website />} />
          {/* Las rutas no distinguen mayúsculas: /Seguros y /Siniestro (originales) siguen funcionando */}
          <Route path="/seguros" element={<Secures />} />
          <Route path="/siniestro" element={<SiniestroForm />} />
          <Route path="/legales" element={<Legales />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
