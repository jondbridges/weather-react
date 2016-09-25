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
    WeatherService.getFiveDayForecast(this.props.routeParams.cityState)
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
      <div>
        <h1>{this.props.routeParams.cityState}</h1>
        <ForecastList forecastDays={this.state.forecastDays} />
      </div>
    );
  }
}

export default ForecastPage;
