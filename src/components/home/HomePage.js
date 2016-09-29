import React from 'react';
import SearchContainer from '../search/SearchContainer';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage-content">
        <div className="col-md-4 col-md-offset-4 text-center">
          <div className="HomePage-search-label">Enter a City and State</div>
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;
