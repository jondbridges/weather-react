import React from 'react';
import WeatherService from '../../services/weatherService';
import ForecastList from './ForecastList';

class ForecastPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      forecastDays: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchForecastDays(this.props.routeParams.cityState)
  }

  componentWillReceiveProps(nextProps) {
    this.fetchForecastDays(nextProps.routeParams.cityState);
  }

  fetchForecastDays(cityState) {
    WeatherService.getForecast(cityState)
      .then(forecastDays => {
        this.setState({
          forecastDays: forecastDays,
          isLoading: false
        });
      })
      .catch(err => {
        console.error('There was an error getting five day forecast.', err);
      });
  }

  handleDaySelect = (forecastDay) => {
    this.context.router.push({
      pathname: `/detail/${this.props.routeParams.cityState}`,
      state: {
        forecastDay
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="forecast-header">
            {this.props.routeParams.cityState} <small>Select a day</small>
          </h1>
        </div>
        <ForecastList
          forecastDays={this.state.forecastDays}
          isLoading={this.state.isLoading}
          onDaySelect={this.handleDaySelect} />
      </div>
    );
  }
}

ForecastPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ForecastPage;
