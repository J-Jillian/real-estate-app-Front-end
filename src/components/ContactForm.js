import React from "react";
import styled from "styled-components";
import Back from "./Back";
import img from "../assets/recent.jpeg";
import { Button } from "./Button";

const Section = styled.section`
@media screen and (max-width: 768px) {
    h4 {
      width: 100%;
      margin-bottom: 30px;
    }
`;
const Box = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    div {
      flex-direction: column;
    }

    input {
      width: 100%;
    }
  }
`;
const Form = styled.form`
  padding: 30px;

  textarea {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 20px;
    margin-right: 10px;
  }
`;

const ContactForm = () => {
  return (
    <>
      <Section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <Box className="container">
          <Form className="shadow">
            <h4>Contáctanos</h4> <br />
            <Box>
              <input type="text" placeholder="name" />
              <input type="to:email" placeholder="email" />
            </Box>
            <input type="text" placeholder="Asunto" />
            <textarea cols="30" rows="10"></textarea>
            <Button primary="true">Enviar mensaje</Button>
          </Form>
        </Box>
      </Section>
    </>
  );
};

export default ContactForm;
