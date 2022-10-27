import React from "react";
import SearcBar from "../components/SearcBar";
import InfoSection from "../components/InfoSection";
import { InfoData } from "../data/InfoData";
import Recent from "../components/Recent";
import styled from "styled-components";
import Back from "../components/Back";
import Heading from "../components/Heading";
import { Button } from "bootstrap";
// import img from "../assets/imageFour.jpeg";

const Section = styled.section``;
const Box = styled.div``;

const Nosotros = () => {
  return (
    <>
      <Section className="about">
        {/* <Back name="Nosotros" tittle="Quienes somos" cover={img} /> */}
        <Box className="container flex mtop">
          <Box className="left row">
            <Heading
              title="Nuestra Hitoria"
              subtitle="Check out our company story and work process"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </Box>
          <Box></Box>
        </Box>
      </Section>
      <InfoSection {...InfoData} />
    </>
  );
};

export default Nosotros;
