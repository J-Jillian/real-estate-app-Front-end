import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { footer } from "../data/InfoData";
import Button2 from "./Button2";

const Section = styled.section`
  background-color: #27ae60;
  padding: 40px 0;
  color: #fff;

  h1 {
    font-size: 40px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 2fr 1fr;
  grid-gap: 20px;
`;

const Box = styled.div``;

const FooterContainer = styled.footer`
  background-color: #1d2636;
  padding: 50px 0;
  color: #fff;

  .container {
    display: grid;
    grid-template-columns: 6fr 2fr 2fr 1fr;
    grid-gap: 20px;
  }

  img {
    width: 150px;
  }
  h2 {
    font-weight: 500;
  }
  p {
    color: grey;
    margin: 20px 0;
  }

  h3 {
    font-weight: 500;
    margin-bottom: 30px;
  }

  input {
    background-color: #fff;
    padding: 17px;
    width: 100%;
    border-radius: 5px;
  }

  h3 {
    font-weight: 500;
    margin-bottom: 30px;
  }

  ul {
    display: block;
  }

  ul li {
    display: block;
    color: grey;
    margin-bottom: 20px;
  }

  li {
    font-size: 18px;
  }
  .legal {
    text-align: center;
    padding: 20px;
    background: #1d2636;
    color: rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media screen and (max-width: 800px) {
    footer .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
const Image = styled.img``;

const Footer = () => {
  return (
    <>
      <Section>
        <Box className="container">
          <Box className="send flex">
            <Box className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </Box>
            <Button primary="true">Contáctanos</Button>
          </Box>
        </Box>
      </Section>

      <FooterContainer>
        <Container className="container">
          <Box className="box">
            <Box className="logo">
              <Image src="../assets/logo.png" alt=""></Image>
              <h2>¿Necesita ayuda con algo?</h2>
              <p>
                Recibe actualizaciones, ofertas, descuentos enviados
                directamente en su bandeja de entrada cada mes
              </p>
              <Box className="input flex">
                <input type="text" placeholder="Escribe tu correo aquí" />
                <Button primary="true">Suscríbete</Button>
                <Button2 content="hola"></Button2>
              </Box>
            </Box>
          </Box>

          {footer.map((val) => (
            <Box className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li>{items.list}</li>
                ))}
              </ul>
            </Box>
          ))}
        </Container>
      </FooterContainer>
    </>
  );
};

export default Footer;
