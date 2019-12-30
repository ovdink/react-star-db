import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import SwapiService from '../../services/swapi-service';

//
import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
//

import './App.scss';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <RandomPlanet />
          <PeoplePage />
        </div>
      </div>
    );
  }
}
