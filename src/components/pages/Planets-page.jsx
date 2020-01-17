import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../Row';
import { PlanetDetails, PlanetList } from '../sw-components';

const PlanetPage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <>
      <h2>Planets</h2>
      <Row
        left={<PlanetList onItemSelected={(id) => history.push(id)} />}
        right={<PlanetDetails itemId={id} />}
      />
    </>
  );
};

export default withRouter(PlanetPage);
