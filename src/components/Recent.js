import React from "react";
import styled from "styled-components";
import Heading from "./Heading.js";
import RecentCard from "./RecentCard.js";

const Section = styled.section`
  padding: 30px;
  margin-top: 100px;

  p {
    color: #72809d;
  }
  .button {
    border-top: 1px solid #e4e8f3;
    padding: 10px 30px;
  }
`;
const Container = styled.div``;

const Recent = () => {
  return (
    <>
      <Section className="recent padding">
        <Container className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <RecentCard />
        </Container>
      </Section>
    </>
  );
};

export default Recent;
