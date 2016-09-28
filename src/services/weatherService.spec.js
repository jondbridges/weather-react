import WeatherService, {FORECAST_URL} from './weatherService';
import weatherServiceTestData from './weatherServiceTestData';
import axios from 'axios';

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

