import React from "react";
import styled from "styled-components";
import Heading from "./Heading.js";
import RecentCard from "./RecentCard.js";

const Section = styled.section`
  .text {
    padding: 30px;
  }
`;
const Container = styled.div``;

const Recent = () => {
  return (
    <>
      <Section className="recent padding">
        <Container className="container">
          <Heading title="Propiedades Recientes" subtitle="" />
          <RecentCard />
        </Container>
      </Section>
    </>
  );
};

export default Recent;
