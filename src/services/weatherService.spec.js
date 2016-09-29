import WeatherService, {FORECAST_URL} from './weatherService';
import weatherServiceTestData from './weatherServiceTestData';
import axios from 'axios';
import moment from 'moment';

describe('getForecast', () => {

  describe('when successful API call', () => {

    beforeEach(() => {
      // Mock axios.get to return a promise which resolves with the test data.
      axios.get = jest.fn(() => {
        return new Promise( resolve => resolve({data: weatherServiceTestData }) );
      });
    });

    it('calls api with city name and a count of 5', () => {
      let cityName = 'Seattle';

      WeatherService.getForecast(cityName);

      expect(axios.get)
        .lastCalledWith(FORECAST_URL + '&q=' + cityName + '&cnt=5');
    });

    it('returns a list of 5 forecast days', (done) => {
      WeatherService.getForecast('St. Louis')
        .then(days => {
          expect(days.length).toBe(5);

          done();
        });
    });

    it('converts data to forecast days model', (done) => {
      WeatherService.getForecast('St. Louis')
        .then(days => days.map(day => {
          expect(day.id).toBeDefined();
          expect(day.date).toBeDefined();
          expect(day.conditionIcon).toBeDefined();
          expect(day.desc).toBeDefined();
          expect(day.minTemp).toBeDefined();
          expect(day.maxTemp).toBeDefined();
          expect(day.humidity).toBeDefined();

          done();
        }));
    });

    it('converts each date to a valid formatted date', (done) => {
      WeatherService.getForecast('Boise')
        .then(days => days.map(day => {
          let isValidDate = moment(day.date, 'dddd, MMM D').isValid();
          expect(isValidDate).toBe(true);

          done();
        }));
    });

  });

  describe('when API call errors', () => {

    const errorMessage = 'Error Occured';
    beforeEach(() => {
      // Mock axios.get to return a promise which rejects with an error message.
      axios.get = jest.fn(() => {
        return new Promise((resolve, reject) => reject(errorMessage));
      });
    });

    it('logs error message', (done) => {
      WeatherService.getForecast('Boise, ID')
        .then(() => {
          expect(console.error)
            .lastCalledWith('There was an error getting the five day weather forecast', errorMessage);

          done();
        });
    });

    it('returns no days', (done) => {
      WeatherService.getForecast('Boise, ID')
        .then(days => {
          expect(days).not.toBeDefined();

          done();
        });
    });

  });

});

