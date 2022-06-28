import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import ContentListaTareas from "./Components/ContentListaTareas";
import HeaderListaTareas from "./Components/HeaderListaTareas";
import { Container } from "reactstrap";

function App() {
  const [input, setInput] = useState("");
  const [tareas, setTareas] = useState([]);

  // Capturando el valor del input

  const changeInput = (e) => {
    let valor = e.target.value;
    setInput(valor);
  };

  // Enviando la tarea desde el formulario

  const sendForm = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: parseInt(Math.random() * 1000),
      valor: input,
      completada: false,
    };
    agregarTarea(nuevaTarea);
  };

  // Agregando la tarea al arreglo tareas

  const agregarTarea = (tarea) => {
    const tareaActualizada = [tarea, ...tareas];
    setTareas(tareaActualizada);
  };

  const eliminarTarea = (id) => {
    let tareaActualizada = tareas.filter((tareas) => tareas.id !== id);
    setTareas(tareaActualizada);
  };

  const completarTarea = (id) => {
    tareas.map((tarea) => {
      if (id === tarea.id) {
        tarea.completada = !tarea.completada;
        console.log(
          "La tarea con el valor " +
            tarea.valor +
            " tiene la tarea completada como " +
            tarea.completada
        );
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          Aqui empezaremos con el clon de la lista de tareas - desde cero XD
        </h1>
        <br />
        <div className="container-project">
          <Container fluid="sm">
            <HeaderListaTareas
              sendForm={sendForm}
              changeInput={changeInput}
            ></HeaderListaTareas>
            <br />
            {tareas.map((tarea) => (
              <ContentListaTareas
                key={tarea.id}
                id={tarea.id}
                valor={tarea.valor}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
              />
            ))}
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
