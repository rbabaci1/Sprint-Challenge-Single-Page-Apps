import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.error(error));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </section>
  );
}
