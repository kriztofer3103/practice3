import { React } from "react";
import { Form, FormGroup, Button, Input } from "reactstrap";

function HeaderListaTareas({ sendForm, changeInput }) {
  return (
    <div className="container-header">
      <h2 className="subtitle">LISTA DE TAREAS</h2>
      <br />
      <Form onSubmit={sendForm}>
        <FormGroup>
          <Input
            type="text"
            placeholder="Ingrese su Tarea"
            bsSize="lg"
            onChange={changeInput}
          ></Input>
        </FormGroup>
        <Button color="success" size="lg">
          Agregar Tarea
        </Button>
      </Form>
    </div>
  );
}

export default HeaderListaTareas;
