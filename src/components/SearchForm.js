import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchResults from "./SearchResults";

const Form = styled.form`
  text-align: center;
  padding-bottom: 3%;
`;

const Input = styled.input`
  text-align: center;
`;

export default function SearchForm({ chars }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  console.log(chars);

  useEffect(() => {
    const results = chars.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const changeHandler = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <section className="search-form">
      <Form>
        <Input
          id="search"
          type="text"
          name="searchBar"
          placeholder="Search"
          onChange={changeHandler}
          value={searchTerm}
        />
      </Form>
      <SearchResults searchResults={searchResults} />
    </section>
  );
}
