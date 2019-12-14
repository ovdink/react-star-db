import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__logo">Star DB</h1>
      <ul className="header__categories">
        <li>People</li>
        <li>Planets</li>
        <li>Starships</li>
      </ul>
    </div>
  );
};

export default Header;
