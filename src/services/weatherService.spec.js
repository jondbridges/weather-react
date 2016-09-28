import WeatherService, {FORECAST_URL} from './weatherService';
import weatherServiceTestData from './weatherServiceTestData';
import mockAxios from 'axios';

// Mock axios get http call to return the test data
// mockAxios.get = jest.fn(() => {
//   return new Promise(
//     function (resolve) {
//       resolve({data: weatherServiceTestData });
//     }
//   );
// });

describe('getForecast', () => {

  it('calls api with city name and a count of 5', () => {
    let cityName = 'Seattle';
    spyOn(mockAxios, 'get').and.returnValue(
      new Promise(
        resolve => {
          resolve({data: weatherServiceTestData });
      })
    );

    WeatherService.getForecast(cityName);

    expect(mockAxios.get)
      .toHaveBeenCalledWith(FORECAST_URL + '&q=' + cityName + '&cnt=5');
  });

  it('returns a list of 5 forecast days', () => {
    spyOn(mockAxios, 'get').and.returnValue(
      new Promise(
        resolve => {
          resolve({data: weatherServiceTestData });
        })
    );
    WeatherService.getForecast('St. Louis')
      .then(days => {
        expect(days.length).toBe(5);
      });
  });
});

