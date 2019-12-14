import React from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import ItemList from '../Item-list';
import PersonDetails from '../Person-details';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <RandomPlanet />
        <ItemList />
        <PersonDetails />
      </div>
    </div>
  );
}

export default App;
