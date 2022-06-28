import React from "react";
import { InputGroup, Button, Input } from "reactstrap";

function Tarea({ id, valor, completada, completarTarea, eliminarTarea }) {
  return (
    <div>
      <InputGroup>
        <Input
          readOnly="readonly"
          defaultValue={valor}
          onClick={() => completarTarea(id)}
        ></Input>
        <Button color="danger" onClick={() => eliminarTarea(id)}>
          <box-icon name="trash" animation="tada" color="#fff"></box-icon>
        </Button>
      </InputGroup>
      <br />
    </div>
  );
}

export default Tarea;
