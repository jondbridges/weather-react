import React from 'react';

const ForecastList = ({forecastDays}) => {
  return (
    <div>
      {forecastDays.map(forecastDay =>
        <li key={forecastDay.id}>
          <img src={"/images/weather-icons/" + forecastDay.conditionIcon + ".svg"} alt="Weather" />
          {forecastDay.date} : {forecastDay.conditionIcon}
        </li>
      )}
    </div>
  );
};

ForecastList.propTypes = {
  forecastDays: React.PropTypes.array.isRequired
};

export default ForecastList;
