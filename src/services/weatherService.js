import axios from 'axios';
import moment from 'moment';

const FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
const APP_ID = 'f6ea15ddd1b9a6e5f6911074912b7eb6';

class WeatherService {
  static getForecast(cityState) {
    return getFiveDayWeatherData(cityState)
      .then(resp => {
        return resp.data.list
          .map(day => convertToForecastDay(day));
      });
  }
}

function getFiveDayWeatherData(cityState) {
  return axios.get(`${FORECAST_URL}?q=${cityState}&mode=json&appid=${APP_ID}&cnt=5`);
}

function convertToForecastDay(day) {
  return {
    id: day.dt,
    date: moment.unix(day.dt).format('dddd, MMM D'),
    conditionIcon: day.weather[0].icon
  };
}

export default WeatherService;