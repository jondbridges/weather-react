import React from 'react';
import ForecastDay from './ForecastDay';

class ForecastDetailPage extends React.Component {
  render() {
    return (
      <div>
        <ForecastDay forecastDay={this.props.location.state.forecastDay} />
      </div>
    );
  }
}

export default ForecastDetailPage;
