import React from 'react';

const ForecastDay = ({forecastDay}) => {
  return (
    <div className="forecast-day">
      <img className="center-block weather-icon" src={"/images/weather-icons/" + forecastDay.conditionIcon + ".svg"} alt="Weather" />
      <div className="text-center">{forecastDay.date}</div>
    </div>
  );
};

ForecastDay.propTypes = {
  forecastDay: React.PropTypes.object.isRequired
};

export default ForecastDay;
