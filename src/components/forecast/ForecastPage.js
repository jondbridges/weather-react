import React from 'react';

class ForecastPage extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.routeParams.cityState}</h1>
      </div>
    );
  }
}

export default ForecastPage;
