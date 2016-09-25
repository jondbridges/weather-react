import React from 'react';
import ForecastDay from './ForecastDay';

const ForecastList = ({forecastDays, onDaySelect}) => {
  return (
    <div className="row forecast">
      {forecastDays.map(forecastDay =>
        <div
          key={forecastDay.id}
          className="col-xs-6 col-sm-4 col-md-3 forecast-card"
          onClick={() => onDaySelect(forecastDay)}>
          <ForecastDay
            forecastDay={forecastDay}
          />
        </div>
      )}
    </div>
  );
};

ForecastList.propTypes = {
  forecastDays: React.PropTypes.array.isRequired,
  onDaySelect: React.PropTypes.func.isRequired
};

export default ForecastList;
