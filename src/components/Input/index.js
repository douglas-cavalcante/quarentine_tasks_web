import React from "react";

// import { Container } from './styles';

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
