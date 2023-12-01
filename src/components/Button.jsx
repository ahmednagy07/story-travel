import React from "react";
import styled from "styled-components";
export default function Button({ text }) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  background-color: #225377;
  border: none;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
`;
