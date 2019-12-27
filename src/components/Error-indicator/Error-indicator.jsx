import React from 'react';

import './Error-indicator.scss';
import errorIcon from './death-star.gif';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={errorIcon} alt="error icon" />
      <span className="error-indicator__title">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
