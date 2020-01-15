import React from 'react';

import ItemDetails, { Record } from '../Item-details';
import { WithSwapiService } from '../Hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="rotationPeriod" label="Rotation Period:" />
      <Record field="population" label="Population:" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default WithSwapiService(mapMethodsToProps)(PlanetDetails);
