import React from 'react';
import ForecastDay from '../ForecastDay';

const Detail = ({forecastDay, cityState}) => {
  return (
    <div className="detail">
      <ForecastDay forecastDay={forecastDay} />
      <div className="col-md-4 col-md-offset-4 text-center">
        <p>{cityState}</p>
        <p>{forecastDay.desc}</p>
        <p><label>Max Temperature:</label> {forecastDay.maxTemp} °F</p>
        <p><label>Min Temperature:</label> {forecastDay.minTemp} °F</p>
        <p><label>Humidity:</label> {forecastDay.humidity}%</p>
      </div>
    </div>
  );
};

Detail.propTypes = {
  forecastDay: React.PropTypes.object.isRequired,
  cityState: React.PropTypes.string.isRequired
};

export default Detail;
