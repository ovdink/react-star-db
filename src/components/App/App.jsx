import React, { Component } from 'react';

import Header from '../Header';
import Row from '../Row';
import RandomPlanet from '../Random-planet';

// import PeoplePage from '../People-page';
import SwapiService from '../../services/swapi-service';

//
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';
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
      getPlanetImage,
      getAllPeople
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={5} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender:" />
        <Record field="birthYear" label="Birth Year:" />
        <Record field="eyeColor" label="Eye Color:" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model:" />
        <Record field="length" label="Length:" />
        <Record field="costInCredits" label="Cost:" />
      </ItemDetails>
    );

    const planetDetails = (
      <ItemDetails itemId={18} getData={getPlanet} getImageUrl={getPlanetImage}>
        <Record field="rotationPeriod" label="Rotation Period:" />
        <Record field="population" label="Population:" />
      </ItemDetails>
    );

    return (
      <div className="App">
        <div className="container">
          <Header />
          <Row left={<PersonDetails itemId={11} />} right={<PersonList />} />
          <Row left={<PlanetDetails itemId={9} />} right={<PlanetList />} />
          <Row left={<StarshipDetails itemId={5} />} right={<StarshipList />} />
        </div>
      </div>
    );
  }
}
