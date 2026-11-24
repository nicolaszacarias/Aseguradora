import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../buttonwh/Buttonwh";

const Layout = () => (
  <>
    <a className="saltar" href="#contenido">Saltar al contenido</a>
    <Header />
    <main id="contenido" tabIndex={-1}>
      <Outlet />
    </main>
    <WhatsAppButton />
    <Footer />
  </>
);

export default Layout;
