import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
import SearcBar from "./components/SearcBar";
import Recent from "./components/Recent";
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
      <Hero slides={SliderData} />
      <SearcBar />
      <Recent />
      <InfoSection {...InfoData} />
      <Footer />
    </>
  );
}

export default App;
