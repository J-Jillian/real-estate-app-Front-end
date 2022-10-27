import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Heading from "../components/Heading";
import { useState } from "react";

const Container = styled.div`
  padding: 200px;
`;

function AdminPanel() {
  const [form, SetForm] = useState({});
  const [error, SetError] = useState({});

  return (
    <>
      <Container className="container">
        <Heading
          title="Bienvenido"
          subtitle="Este es el Panel de Administración Inmex"
        />
        <Form>
          <fieldset disabled>
            <Form.Group className="mb-3"></Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">
                Selecione la opción que desea llevar acabo.
              </Form.Label>
              <Form.Select multiple>
                <option>Seleccionar</option>
                <option>Agregar una nueva propiedad</option>
                <option>Ediatar una propiedad</option>
                <option>Eliminar una propiedad</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="disabledFieldsetCheck"
                label="Can't check this"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}

export default AdminPanel;
