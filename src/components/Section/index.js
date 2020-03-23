import React from "react";

import { Container, Header, List, Title, Size, Item, Pin } from "./styles";

export default function Section({ title, data }) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Size>{data.length} tarefas</Size>
      </Header>
      <List>
        {data.map(item => (
          <Item>
            <Pin />
            {item.description}
          </Item>
        ))}
      </List>
    </Container>
  );
}
