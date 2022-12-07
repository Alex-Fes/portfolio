import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./mainBlock/Main";
import Skills from "./skills/Skills";
import Projects from "./propjects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Hire from "./hire/Hire";

function App() {
    return (<>
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Hire/>
        <Contacts/>
        <Footer/>
    </>)
}

export default App;
