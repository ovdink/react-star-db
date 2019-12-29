import React, { Component } from 'react';

import './Item-list.scss';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

export default class ItemList extends Component {
  SwapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.SwapiService.getAllPeople().then((res) => {
      this.setState({
        peopleList: res
      });
    });
  }

  renderItems(arr) {
    return arr.map(({ name, id }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) return <Spinner />;
    return (
      <ul className="item-list list-group">{this.renderItems(peopleList)}</ul>
    );
  }
}
