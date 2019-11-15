import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  flex-direction: column;
  text-align: center;
`;

const CharLink = styled.div`
  width: 100%;
  text-decoration: none;
  color: dodgerblue;
  padding: 2% 0 2% 0;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h2>Welcome to the ultimate fan site!</h2>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to="/characters">
          <CharLink>Characters</CharLink>
        </Link>
      </Header>
    </section>
  );
}
