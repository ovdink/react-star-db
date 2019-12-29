import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import ItemList from '../Item-list';
import PersonDetails from '../Person-details';

import './App.scss';

export default class App extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <RandomPlanet />
          <div className="d-flex justify-content-between flex-container">
            <ItemList onItemSelected={this.onPersonSelected} />
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
              />
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
