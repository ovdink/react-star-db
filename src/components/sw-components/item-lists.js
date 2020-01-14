import React from 'react';
import ItemList from '../Item-list';
import { WithData, WithSwapiService } from '../Hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

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
    getData: swapiService.getAllPeople
  };
};
const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const PersonList = WithSwapiService(
  WithData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps
);
const PlanetList = WithSwapiService(
  WithData(withChildFunction(ItemList, renderName)),
  mapPlanetsMethodsToProps
);
const StarshipList = WithSwapiService(
  WithData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipsMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
