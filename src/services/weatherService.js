import axios from 'axios';
import moment from 'moment';

const FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const APP_ID = 'f6ea15ddd1b9a6e5f6911074912b7eb6';

function getForecast(cityState) {
  return axios.get(`${FORECAST_URL}?q=${cityState}&mode=json&appid=${APP_ID}`);
}

// var formattedDate = moment.unix(day.dt).format('dddd, MMM D');
function convertToForecastDay(day) {
  return {
    date: moment.unix(day.dt),
    icon: day.weather[0].icon
  };
}

function getFiveForecastDays(forecastDays, currDay) {
  if (forecastDays.length >= 5) {
    return forecastDays;
  }

  // If there is no latest day in list, or if the latest day is a different day,
  // then add the current day to the list of forecast days.
  var latestDay = forecastDays[forecastDays.length - 1];
  if (!latestDay || !currDay.date.isSame(latestDay.date, 'day')) {
    forecastDays.push(currDay);
  }

  return forecastDays;
}

class WeatherService {

  static getFiveDayForecast(cityState) {
    return getForecast(cityState)
      .then(resp => {
        return resp.data.list
          .map(day => convertToForecastDay(day))
          .reduce(getFiveForecastDays, []);
      });
  }
}

export default WeatherService;