import React from "react";
import { ContainerButton } from "./styles";

function Button({ type, text }) {
  return (
    <>
      <ContainerButton type={type}> {text}</ContainerButton>
    </>
  );
}
export default Button;
