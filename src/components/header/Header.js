import React from 'react';
import { Link } from 'react-router';
import SearchContainer from '../search/SearchContainer';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img src="/images/react-logo.svg" alt="React" />
            React Weather
          </Link>
        </div>
        <div className="navbar-form navbar-right">
          <SearchContainer />
        </div>
      </div>
    </nav>
  );
};

export default Header;

