import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null
  };

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <RandomPlanet updateInterval={3000} />
              <Route
                path="/"
                render={() => (
                  <h2 style={{ textAlign: 'center' }}>Welcome to StarDB</h2>
                )}
                exact
              />
              <Route path="/people/" render={() => <h2>People</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/" render={() => <h2>Planets</h2>} />
              <Route path="/planets/:id?" component={PlanetsPage} />
              <Route path="/starships/" render={() => <h2>Starships</h2>} />
              <Route path="/starships" exact component={StarshipsPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
            </div>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
