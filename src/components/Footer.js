import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

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
const FooterContainer = styled.div``;

const Footer = () => {
  return (
    <>
      <Section>
        <Container className="container">
          <Box className="send flex">
            <Box className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </Box>
            <Button primary="true">Contact Us Today</Button>
          </Box>
        </Container>
      </Section>

      <FooterContainer></FooterContainer>
    </>
  );
};

export default Footer;
