import React from "react";
import styled from "styled-components";

const CharDiv = styled.div`
  color: steelblue;
  text-align: center;
`;

export default function CharacterCard({ char }) {
  const { name } = char;
  return (
    <CharDiv>
      <span>{name}</span>
    </CharDiv>
  );
}
