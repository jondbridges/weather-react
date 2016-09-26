import React from 'react';
import ForecastDay from './ForecastDay';

const ForecastList = ({forecastDays, isLoading, onDaySelect}) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

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
  isLoading: React.PropTypes.bool.isRequired,
  onDaySelect: React.PropTypes.func.isRequired
};

export default ForecastList;
