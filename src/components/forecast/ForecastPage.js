import React from 'react';
import WeatherService from '../../services/weatherService';
import ForecastList from './ForecastList';

class ForecastPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastDays: []
    }
  }

  componentDidMount() {
    WeatherService.getForecast(this.props.routeParams.cityState)
      .then(forecastDays => {
        this.setState({
          forecastDays: forecastDays
        });
      })
      .catch(err => {
        console.error('There was an error getting five day forecast.', err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="forecast-header">
            {this.props.routeParams.cityState} <small>Select a day</small>
          </h1>
        </div>
        <ForecastList forecastDays={this.state.forecastDays} />
      </div>
    );
  }
}

export default ForecastPage;
