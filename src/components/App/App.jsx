import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';

// import PeoplePage from '../People-page';
import SwapiService from '../../services/swapi-service';

//
import ItemList from '../Item-list';
import ItemDetails, { Record } from '../Item-details';
//

import './App.scss';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null
  };

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getPlanet,
      getPlanetImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={5} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    const planetDetails = (
      <ItemDetails
        itemId={18}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
      />
    );

    return (
      <div className="App">
        <div className="container">
          <Header />
          {/* <RandomPlanet /> */}
          {/* <PeoplePage /> */}
          {personDetails}
          {starshipDetails}
          {planetDetails}
        </div>
      </div>
    );
  }
}
