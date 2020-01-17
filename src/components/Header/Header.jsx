import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__logo">Star DB</h1>
      </Link>
      <ul className="header__categories">
        <Link to="/people/">
          <li>People</li>
        </Link>
        <Link to="/planets/">
          <li>Planets</li>
        </Link>
        <Link to="/starships/">
          <li>Starships</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/secret">
          <li>Secret</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
