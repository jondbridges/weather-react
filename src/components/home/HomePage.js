import React from 'react';
import SearchContainer from '../search/SearchContainer';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container home-content">
        <div className="col-md-4 col-md-offset-4 text-center">
          <div className="home-search-label">Enter a City and State</div>
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;
