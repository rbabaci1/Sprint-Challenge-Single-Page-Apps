import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <SearchForm characters={characters} />
    </div>
  );
}
