import React from "react";
import { InputGroup, Input, Button } from "reactstrap";

function ContentListaTareas({
  id,
  valor,
  completada,
  eliminarTarea,
  completarTarea,
}) {
  return (
    <div className="container-content">
      <InputGroup>
        <Input
          type="text"
          defaultValue={valor}
          readOnly="readonly"
          onClick={() => completarTarea(id)}
        />
        <Button color="danger" onClick={() => eliminarTarea(id)}>
          <box-icon name="trash" animation="spin" color="#fff"></box-icon>
        </Button>
      </InputGroup>
    </div>
  );
}

export default ContentListaTareas;
