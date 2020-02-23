import React from 'react';
import { NavLink } from 'react-router-dom';
import { pure } from 'recompose';

function Header() {
  return (
    <header className='ui centered'>
      <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      <NavLink to='/' className='to-home'>
        Home
      </NavLink>
    </header>
  );
}

export default pure(Header);
