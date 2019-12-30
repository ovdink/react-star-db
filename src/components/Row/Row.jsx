import React from 'react';

import './Row.scss';

const Row = ({ left, right }) => {
  return (
    <div className="d-flex justify-content-between flex-container">
      {left}
      {right}
    </div>
  );
};

export default Row;
