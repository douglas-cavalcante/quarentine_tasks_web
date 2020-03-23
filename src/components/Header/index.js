import React from "react";
import { Container, Title, Logo } from "./styles";

import LogoApp from "../../assets/logo.png";

/*

  {
    id: 1,
    description: 'teste',
    status: null
  }

*/

function Header() {
  return (
    <Container>
      <Logo src={LogoApp} />
      <Title>Quarentena Tasks</Title>
    </Container>
  );
}

export default Header;
