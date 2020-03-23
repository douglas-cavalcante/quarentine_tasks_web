import React, { useState } from "react";

import Header from "./components/Header";
import { Content, Form } from "./styles";

import Input from "./components/Input";
import Button from "./components/Button";
import Section from "./components/Section";

function App() {
  const [task, setTask] = useState("");

  return (
    <>
      <Header />
      <Content>
        <Form onSubmit={() => alert("submeter")}>
          <input
            type="text"
            placeholder="Digite a tarefa"
            value={task}
            onChange={e => setTask(e.target.value)}
          />

          <Button type="submit" text="Enviar" />
        </Form>

        <Section
          title="Pendentes"
          data={[
            {
              id: 1,
              description: "Estudar react",
              status: null
            }
          ]}
        />

        <Section
          title="Concluídos"
          data={[
            {
              id: 1,
              description: "Estudar react",
              status: null
            }
          ]}
        />

        <Section
          title="Cancelados"
          data={[
            {
              id: 1,
              description: "Estudar react",
              status: null
            },
            {
              id: 2,
              description: "Estudar react",
              status: null
            },
            {
              id: 3,
              description: "Estudar react",
              status: null
            },
            {
              id: 1,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 2,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 1,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 2,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 1,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 2,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 1,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 2,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 1,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 2,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 1,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 2,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 1,
              description: "Estudar react",
              status: null,
              date: new Date()
            },
            {
              id: 2,
              description: "Estudar react",
              status: null,
              date: new Date()
            }
          ]}
        />
      </Content>
    </>
  );
}

export default App;
