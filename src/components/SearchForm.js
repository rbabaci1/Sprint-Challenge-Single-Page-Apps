import React, { useState, useEffect } from "react";

export default function SearchForm({ characters, setSearchResult }) {
  const [searchTerm, setSearchTerm] = useState("");

  const inputHandler = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    let results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResult(results);
  }, [searchTerm]);

  return (
    <section className="search-form">
      <label>
        <span>Search Characters: </span>
        <input type="text" placeholder="Enter name" onChange={inputHandler} />
      </label>
    </section>
  );
}
