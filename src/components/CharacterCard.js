import React from "react";

import styled from "styled-components";

const CharDiv = styled.div`
  color: steelblue;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 3% 0 3% 0;
`;

const Span = styled.span`
  padding-bottom: 2%;
`;

export default function CharacterCard({ char }) {
  console.log(char);
  const { name, image, status, origin } = char;
  return (
    <CharDiv>
      <Span>{name}</Span>
      <div>
        <img src={image} alt="character headshot"></img>
      </div>
      <span>Origin: {origin.name}</span>
      <span>Status: {status}</span>
    </CharDiv>
  );
}
