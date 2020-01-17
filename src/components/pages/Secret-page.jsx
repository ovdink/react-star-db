import React from 'react';
import { Redirect } from 'react-router-dom';

import gif from './bb8.gif';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>This page is full of secrets!</h3>
        <img src={gif} />
      </div>
    );
  }
  return <Redirect to="/login" />;
};

export default SecretPage;
