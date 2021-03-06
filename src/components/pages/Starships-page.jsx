import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarhipsPage = ({ history }) => {
  return (
    <>
      <h2>Starships</h2>
      <StarshipList onItemSelected={(id) => history.push(id)} />
    </>
  );
};

export default withRouter(StarhipsPage);
