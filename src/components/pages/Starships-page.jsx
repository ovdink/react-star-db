import React, { Component } from 'react';
import Row from '../Row';
import { StarshipDetails, StarshipList } from '../sw-components';

export default class StarhipsPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem
    });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
