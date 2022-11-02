import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Heading from "../../components/Heading";
import CounterInput from "react-bootstrap-counter";

const Container = styled.div`
  padding: 200px 150px;
`;

const AddProperty = () => {
  return (
    <>
      <Container className="container">
        <Heading title="Agregar una propiedad" />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Tipo de propiedad</Form.Label>
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Venta"
            />
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="renta"
            />
            <Form.Control as="select">
              <option>Seleccionar</option>
              <option value="casa">Casa</option>
              <option valeu="departamento">Departamento</option>
              <option value="local">Local Comercial</option>
              <option value="terreno">Terreno</option>
              <option value="otro">Otro</option>
            </Form.Control>
            <Form.Label>Ubicación</Form.Label>
            <Form.Control type="text" placeholder="Agregue la dirección" />
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" placeholder="$" />
            <Form.Label>Área bruta</Form.Label>
            <Form.Control type="text" placeholder="m2" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Habitaciones</Form.Label>
            <CounterInput
              max={20}
              min={0}
              onChange={(value) => {
                console.log(value);
              }}
              value={0}
            />
            <Form.Label>Baños</Form.Label>
            <CounterInput
              max={20}
              min={0}
              onChange={(value) => {
                console.log(value);
              }}
              value={0}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Agrega una Descipción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProperty;
