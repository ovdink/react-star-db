import React, { Component } from 'react';

import ItemList from '../Item-list';
import ItemDetails from '../Item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../Row';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedItem: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => `${item.name} (age: ${item.birthYear})`}
      />
    );

    const itemDetails = <ItemDetails itemId={this.state.selectedItem} />;

    return <Row left={itemList} right={itemDetails} />;
  }
}
