import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from '../pages';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.scss';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <RandomPlanet updateInterval={3000} />
              <Switch>
                <Route
                  path="/"
                  render={() => (
                    <h2 style={{ textAlign: 'center' }}>Welcome to StarDB</h2>
                  )}
                  exact
                />

                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets/:id?" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                />
                <Route
                  render={() => {
                    return <h3>Page not found!</h3>;
                  }}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
