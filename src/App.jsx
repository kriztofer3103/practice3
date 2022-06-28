import { React, useState } from "react";
import "./App.css";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Tarea from "./Components/Tarea";

function App() {
  const [input, setInput] = useState("");
  const [tareas, setTareas] = useState([]);

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const envioFormulario = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: parseInt(Math.random() * 1000),
      valor: input,
      completada: false,
    };
    agregarTarea(tareaNueva);
  };

  const agregarTarea = (tarea) => {
    if (tarea.valor.trim()) {
      tarea.valor = tarea.valor.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const completarTarea = (id) => {
    tareas.map((tarea) => {
      if (id == tarea.id) {
        tarea.completada = !tarea.completada;
        console.log(
          "La tarea " +
            tarea.valor +
            " ha sido completada con " +
            tarea.completada
        );
      }
    });
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          Aqui empezaremos con la 3era práctica de React en Vite
        </div>
        <br />
        <Container fluid="sm">
          {/* Lista de Tareas */}
          <div className="lista-de-tareas">
            <h2 className="subtitle">LISTA DE TAREAS</h2>
            <br />
            {/* Formulario Tarea */}
            <Form onSubmit={envioFormulario}>
              <FormGroup>
                <Input
                  placeholder="Ingrese su Tarea"
                  type="text"
                  bsSize="lg"
                  onChange={changeInput}
                ></Input>
              </FormGroup>
              <Button color="success" size="lg">
                Agregar Tarea
              </Button>
            </Form>
            <br />
            {tareas.map((tarea) => (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                valor={tarea.valor}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
              ></Tarea>
            ))}
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
