import React from 'react';
import ForecastDay from './ForecastDay';

const ForecastList = ({forecastDays, onDaySelect}) => {
  return (
    <div className="forecast row">
      {forecastDays.map(forecastDay =>
        <div key={forecastDay.id} className="col-xs-6 col-sm-4 col-md-3">
          <ForecastDay
            forecastDay={forecastDay}
            onDaySelect={onDaySelect}
          />
        </div>
      )}
    </div>
  );
};

ForecastList.propTypes = {
  forecastDays: React.PropTypes.array.isRequired,
  onDaySelect: React.PropTypes.func
};

export default ForecastList;
