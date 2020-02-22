import React, { useState } from "react";

export default function SearchForm({
  characters,
  searchResult,
  setSearchResult
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const inputHandler = event => {
    setSearchTerm(event.target.value);
  };

  console.log(searchTerm);

  // console.log(characters);
  return (
    <section className="search-form">
      <label>
        Search Characters
        <input type="text" placeholder="Enter name" onChange={inputHandler} />
      </label>
    </section>
  );
}
