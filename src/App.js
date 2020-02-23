import React from 'react';
import { Route } from 'react-router-dom';
import { pure } from 'recompose';

import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

const App = () => {
  return (
    <main>
      <Header />

      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
};

export default pure(App);
