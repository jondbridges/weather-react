import React from 'react';
import './Forecast.css';

const ForecastDay = ({forecastDay}) => {
  return (
    <div className="Forecast-day">
      <img className="center-block Forecast-weather-icon"
           src={process.env.PUBLIC_URL + "/images/weather-icons/" + forecastDay.conditionIcon + ".svg"}
           alt="Weather" />
      <div className="text-center">{forecastDay.date}</div>
    </div>
  );
};

ForecastDay.propTypes = {
  forecastDay: React.PropTypes.object.isRequired
};

export default ForecastDay;
