import axios from 'axios';
import moment from 'moment';

const APP_ID = 'f6ea15ddd1b9a6e5f6911074912b7eb6';
const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${APP_ID}&mode=json&units=imperial`;

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
  return axios.get(`${FORECAST_URL}&q=${cityState}&cnt=5`);
}

function convertToForecastDay(day) {
  return {
    id: day.dt,
    date: moment.unix(day.dt).format('dddd, MMM D'),
    conditionIcon: day.weather[0].icon,
    desc: day.weather[0].description,
    minTemp: Math.round(day.temp.min),
    maxTemp: Math.round(day.temp.max),
    humidity: day.humidity
  };
}

export default WeatherService;