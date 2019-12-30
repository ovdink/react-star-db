import React, { Component } from 'react';

import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../Row';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: null
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => `${item.name} (age: ${item.birthYear})`}
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
