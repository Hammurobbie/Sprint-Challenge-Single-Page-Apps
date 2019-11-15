import React from "react";
import CharacterCard from "./CharacterCard";

export default function SearchResults({ searchResults }) {
  return (
    <section className="search-form">
      {searchResults.map(char => {
        return (
          <CharacterCard
            key={char.id}
            char={char}
            searchResults={searchResults}
          />
        );
      })}
    </section>
  );
}
