import WeatherService, {FORECAST_URL} from './weatherService';
import weatherServiceTestData from './weatherServiceTestData';
import axios from 'axios';
import moment from 'moment';

describe('getForecast', () => {

  describe('when successful API call', () => {

    beforeEach(() => {
      spyOn(axios, 'get').and.returnValue(
        new Promise(
          resolve => { resolve({data: weatherServiceTestData }); }
        )
      );
    });

    it('calls api with city name and a count of 5', () => {
      let cityName = 'Seattle';

      WeatherService.getForecast(cityName);

      expect(axios.get)
        .toHaveBeenCalledWith(FORECAST_URL + '&q=' + cityName + '&cnt=5');
    });

    it('returns a list of 5 forecast days', () => {
      WeatherService.getForecast('St. Louis')
        .then(days => {
          expect(days.length).toBe(5);
        });
    });

    it('converts data to forecast days model', () => {
      WeatherService.getForecast('St. Louis')
        .then(days => days.map(day => {
          expect(day.id).toBeDefined();
          expect(day.date).toBeDefined();
          expect(day.conditionIcon).toBeDefined();
          expect(day.desc).toBeDefined();
          expect(day.minTemp).toBeDefined();
          expect(day.maxTemp).toBeDefined();
          expect(day.humidity).toBeDefined();
        }));
    });

    it('converts each date to a valid formatted date', () => {
      WeatherService.getForecast('Boise')
        .then(days => days.map(day => {
          let isValidDate = moment(day.date, 'dddd, MMM D').isValid();
          expect(isValidDate).toBe(true);
        }));
    });
  });

  describe('when API call errors', () => {

    it('no days are returned', () => {
      spyOn(axios, 'get').and.returnValue(
        new Promise(
          (resolve, reject) => { reject('error occured'); }
        )
      );

      WeatherService.getForecast('Boise, ID')
        .then(days => {
          expect(days).not.toBeDefined();
        });
    });
  });

});

