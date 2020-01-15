import React from 'react';
import PropTypes from 'prop-types';

import './Row.scss';

const Row = ({ left, right }) => {
  return (
    <div className="d-flex justify-content-between flex-container row">
      {left}
      {right}
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
