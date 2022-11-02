import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import styled from "styled-components";
import Heading from "../../components/Heading";
import { useState } from "react";

const Container = styled.div`
  padding: 200px;
`;

function AdminPanel() {
  const [form, SetForm] = useState({});
  const [error, SetError] = useState({});

  const setField = (field, value) => {
    SetForm({
      ...form,
      [field]: value,
    });
    if (!!error[field])
      SetError({
        ...error,
        [field]: null,
      });
  };

  return (
    <>
      <Container className="container">
        <Heading
          title="Panel de Administración Inmex"
          subtitle="Desde este panel podrá administar las propiedades dela web"
        />
        <Form>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">
                Selecione la opción que desea llevar acabo.
              </Form.Label>
              <Form.Control
                as="select"
                value={form.dob}
                onChange={(e) => setField("dob", e.target.value)}
                isInvalid={!!error.dob}
              >
                <Form.Control.Feedback type="invalid">
                  {error.dob}
                </Form.Control.Feedback>

                <option>Seleccionar</option>
                <option value="add">Agregar una nueva propiedad</option>
                <option valeu="Update">Ediatar una propiedad</option>
                <option value="Delete">Eliminar una propiedad</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="disabledFieldsetCheck"
                label="Entiendo que cualquier cambio que realice en el Panel será definitivo."
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
