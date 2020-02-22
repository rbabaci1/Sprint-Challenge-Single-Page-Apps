import React from "react";
import { Route, Link } from "react-router-dom";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main>
      <Header />

      <Route path="/" component={WelcomePage} />
    </main>
  );
}
