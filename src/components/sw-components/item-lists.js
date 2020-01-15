import React from 'react';
import ItemList from '../Item-list';
import {
  WithData,
  WithSwapiService,
  WithChildFunction,
  compose
} from '../Hoc-helpers';

const renderName = ({ name }) => {
  return <span>{name}</span>;
};
const renderModelAndName = ({ model, name }) => {
  return (
    <span>
      {name} ({model})
    </span>
  );
};

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};
const mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};
const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = compose(
  WithSwapiService(mapPersonMethodsToProps),
  WithData,
  WithChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  WithSwapiService(mapPlanetsMethodsToProps),
  WithData,
  WithChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  WithSwapiService(mapStarshipsMethodsToProps),
  WithData,
  WithChildFunction(renderModelAndName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
