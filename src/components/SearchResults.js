import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchResults({ searchResults }) {
  return (
    <section className="search-form">
      {searchResults.map(char => {
        return <CharacterCard key={char.id} char={char} />;
      })}
    </section>
  );
}
