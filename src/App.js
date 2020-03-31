import React, { useState, useEffect } from "react";

import axios from "axios";

import Header from "./components/Header";
import { Content, Form } from "./styles";

import Input from "./components/Input";
import Button from "./components/Button";
import Section from "./components/Section";

function App() {
  const [description, setDescription] = useState("");

  const [tasks, setTasks] = useState({
    completed: [],
    canceled: [],
    pending: []
  });

  async function getTasks() {
    await axios
      .get("http://127.0.0.1:3333/tasks")
      .then(response => {
        setTasks({
          completed: response.data.completed,
          canceled: response.data.canceled,
          pending: response.data.pending
        });
      })
      .catch(_error => {
        alert("Houve um erro no servidor");
      });
  }

  useEffect(() => {
    if (tasks.canceled.length === 5) {
      alert("Procrastinou bastente em ! :)");
    }
  }, [tasks.canceled]);

  // Executado assim que o componente é montao
  useEffect(() => {
    getTasks();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:3333/tasks", { description })
      .then(() => {
        alert("Cadastrado com sucesso");
        getTasks();
      })
      .catch(() => {
        alert("Erro ao cadastrar");
      });
  }

  return (
    <>
      <Header />
      <Content>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite a tarefa"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <Button type="submit" text="Enviar" />
        </Form>

        <Section title="Pendentes" data={tasks.pending} action={getTasks} />

        <Section title="Concluídos" data={tasks.completed} refresh={getTasks} />

        <Section title="Cancelados" data={tasks.canceled} refresh={getTasks} />
      </Content>
    </>
  );
}

export default App;
