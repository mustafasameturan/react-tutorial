import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../constants/Header";
import Footer from "../constants/Footer";
import Navbar from "./Navbar";

function HomeLayout(){

    const [theme, setTheme] = useState('Dark')
    const [language, setLanguage] = useState('TR')

    return(
        <>
            <Header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
            <Navbar/>
            <Outlet />
            <Footer theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
        </>
    )
}

export default HomeLayout;