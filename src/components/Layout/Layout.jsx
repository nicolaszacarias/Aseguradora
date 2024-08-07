import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import WhatsAppButton from"../buttonwh/Buttonwh"
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <div>
                <Header/>
                <Outlet/>
            </div>
            <WhatsAppButton/>
        <Footer/>
        </>
    )
}
export default Layout