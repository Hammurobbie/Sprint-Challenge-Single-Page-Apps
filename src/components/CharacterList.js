import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const HomeLink = styled.header`
  text-align: center;
  padding-bottom: 3%;
  text-decoration: none;
  color: dodgerblue;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setChars(response.data.results);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);

  return (
    <div>
      <Link to="/welcomepage">
        <HomeLink>Home</HomeLink>
      </Link>

      <SearchForm chars={chars} />

      {/* <section className="character-list">
        {chars.map(char => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </section> */}

      <section className="character-list">
        {chars.map(char => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </section>
    </div>
  );
}
