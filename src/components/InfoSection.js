import React from "react";
import styled from "styled-components";
import { Button } from "./Button.js";

const Section = styled.section``;
const Container = styled.section``;
const ColumnLeft = styled.section``;
const ColumnRigth = styled.section``;

const InfoSection = () => {
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <h1>heading</h1>
            <p>Paragraph</p>
            <p>Paragraph</p>
            <Button to="/homes">label</Button>
          </ColumnLeft>
          <ColumnRigth>
            <image src="" alt="Home" />
          </ColumnRigth>
        </Container>
      </Section>
    </>
  );
};

export default InfoSection;
