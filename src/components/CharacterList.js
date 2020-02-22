import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
        setSearchResult(response.data.results);
      })
      .catch(error => console.error(error));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <div>
      <SearchForm characters={characters} setSearchResult={setSearchResult} />

      <section className="character-list">
        {searchResult.map(character => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </section>
    </div>
  );
}
