import React from 'react';

const ForecastDay = ({forecastDay, onDaySelect}) => {
  return (
    <div className="forecast-card" onClick={() => onDaySelect(forecastDay)}>
      <img className="center-block weather-icon" src={"/images/weather-icons/" + forecastDay.conditionIcon + ".svg"} alt="Weather" />
      <div className="text-center">{forecastDay.date}</div>
    </div>
  );
};

ForecastDay.propTypes = {
  forecastDay: React.PropTypes.object.isRequired,
  onDaySelect: React.PropTypes.func
};

export default ForecastDay;
