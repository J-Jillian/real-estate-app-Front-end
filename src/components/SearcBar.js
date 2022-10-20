import { Button } from "./Button.js";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import styled from "styled-components";
import Heading from "./Heading.js";
import SearchBarImg from "../assets/recent.jpeg";

const Section = styled.section`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${SearchBarImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding-top: 15%;

  h1 {
    color: #fff;
    font-size: 60px;
  }

  p {
    color: #fff;
    opacity: 0.8;
  }

  @media screen and (max-width: 800px) {
    padding-top: 30%;
  }
`;

const Container = styled.div`
  padding-top: 5%;
  @media screen and (max-width: 800px) {
    padding-top: 5%;
  }
`;

const Form = styled.form`
  background-color: #fff;
  border-radius: 5px;
  margin-top: 50px;
  padding: 0 20px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 20px;
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(128, 128, 128, 0.2);
  margin-top: 5px;
  border-radius: 5px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Span = styled.span`
  font-size: 20px;
  color: grey;
`;

const Box = styled.div`
  padding: 15px;
`;

const SearcBar = () => {
  return (
    <Section imgUrl="../assets/recent.jpeg">
      <Container className="container">
        <Heading
          title="Casas en Venta, Renta y Propiedades Comerciales"
          subtitle="Tenemos las mejores propiedades del bajío para tí"
        />
        <Form className="flex">
          <Box>
            <Span>Ciudad/Calle</Span>
            <Input type="text" placeholder="Ubicación" />
          </Box>
          <Box className="box">
            <Span>Propiedad</Span>
            <Input type="text" placeholder="Tipo de propiedad" />
          </Box>
          <Box className="box">
            <Span>Precio</Span>
            <Input type="text" placeholder="rango de precio " />
          </Box>
          <Box className="box">{/* <h4>Filtros Avanzados</h4> */}</Box>
          <Button primary="true" big="true">
            <BiSearchAlt />
          </Button>
        </Form>
      </Container>
    </Section>
  );
};

export default SearcBar;
