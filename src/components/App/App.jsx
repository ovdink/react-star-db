import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './App.scss';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null
  };

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="App">
          <div className="container">
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </div>
      </SwapiServiceProvider>
    );
  }
}
