import React from 'react';
import Search from '../search/Search';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Fancy Pancy Weather
          </a>
        </div>
        <form className="navbar-form navbar-right">
          <Search />
        </form>
      </div>
    </nav>
  );
};

export default Header;

