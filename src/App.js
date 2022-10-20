import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import { SliderData } from "./data/SliderData";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Propiedades from "./pages/Propiedades";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import GlobalStyle from "./globalStyles";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* <Hero slides={SliderData} /> */}
      {/* <InfoSection {...InfoData} /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/propiedades" element={<Propiedades />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
