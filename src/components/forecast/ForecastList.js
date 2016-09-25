import React from 'react';

const ForecastList = ({forecastDays}) => {
  return (
    <div>
      {forecastDays.map(forecastDay =>
        <li key={forecastDay.date.unix()}>
          {forecastDay.date.format('dddd, MMM D')} : {forecastDay.icon}
        </li>
      )}
    </div>
  );
};

ForecastList.propTypes = {
  forecastDays: React.PropTypes.array.isRequired
};

export default ForecastList;
