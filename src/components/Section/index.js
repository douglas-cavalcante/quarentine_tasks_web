import React from "react";

import axios from "axios";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { Container, Header, List, Title, Size, Item, Pin } from "./styles";

export default function Section({ title, data, refresh }) {
  function handleChangeStatus(item) {
    confirmAlert({
      title: item.description,
      message: "Escolha uma opção",
      buttons: [
        {
          label: "Concluir",
          onClick: async () => {
            await axios
              .put(`http://127.0.0.1:3333/tasks/${item.id}`, {
                done: true
              })
              .then(() => {
                refresh();
              })
              .catch(() => alert("Houve erro ao atualizar "));
          }
        },
        {
          label: "Cancelar",
          onClick: async () => {
            await axios
              .put(`http://127.0.0.1:3333/tasks/${item.id}`, {
                done: false
              })
              .then(() => {
                refresh();
              })
              .catch(() => alert("Houve erro ao atualizar "));
          }
        }
      ]
    });
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Size>{data.length} tarefas</Size>
      </Header>
      <List>
        {data.map(item => (
          <Item onClick={() => handleChangeStatus(item)}>
            <Pin />
            {item.description}
          </Item>
        ))}
      </List>
    </Container>
  );
}
