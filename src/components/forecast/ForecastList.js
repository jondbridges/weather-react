import React from 'react';
import ForecastDay from './ForecastDay';

const ForecastList = ({forecastDays}) => {
  return (
    <div className="forecast row">
      {forecastDays.map(forecastDay =>
        <div className="col-xs-6 col-sm-4 col-md-3">
          <ForecastDay key={forecastDay.id} forecastDay={forecastDay} />
        </div>
      )}
    </div>
  );
};

ForecastList.propTypes = {
  forecastDays: React.PropTypes.array.isRequired
};

export default ForecastList;
