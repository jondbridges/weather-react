import React from 'react';
import './Forecast.css';

const ForecastDay = ({forecastDay}) => {
  const weatherIconUrl = `${process.env.PUBLIC_URL}/images/weather-icons/${forecastDay.conditionIcon}.svg`;
  
  return (
    <div className="Forecast-day">
      <img className="center-block Forecast-weather-icon" src={weatherIconUrl} alt="Weather" />
      <div className="text-center">{forecastDay.date}</div>
    </div>
  );
};

ForecastDay.propTypes = {
  forecastDay: React.PropTypes.object.isRequired
};

export default ForecastDay;
