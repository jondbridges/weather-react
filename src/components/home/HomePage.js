import React from 'react';
import Search from '../search/Search';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container home-content">
        <div className="col-md-4 col-md-offset-4 text-center">
          <h2>Enter a City and State</h2>
          <Search />
        </div>
      </div>
    );
  }
}

export default HomePage;
