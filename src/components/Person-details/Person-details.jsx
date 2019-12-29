import React, { Component } from 'react';

import './Person-details.scss';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

export default class PersonDetails extends Component {
  SwapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    this.SwapiService.getPerson(personId).then((person) => {
      this.setState({ person, loading: false });
    });
  }

  render() {
    const { person, loading } = this.state;

    const selectPerson = !person ? <ChoosePerson /> : null;
    const content = person ? <PersonView person={person} /> : null;
    // const spinner = loading ? <Spinner /> : null;

    return (
      <div className="person-details card">
        {selectPerson}
        {/* {spinner} */}
        {content}
      </div>
    );
  }
}

const ChoosePerson = () => {
  return (
    <div className="person-details__select">Select a person from a list!</div>
  );
};

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <>
      <img
        className="person-details__image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
