import React from 'react';
import renderer from 'react-test-renderer';
import DetailPage from './DetailPage';

describe('DetailPage', () => {

  it('creates the DetailPage content', () => {
    const props = {
      location: {
        state: {
          forecastDay: {
            desc: 'lots of clouds',
            maxTemp: 88,
            minTemp: 44,
            humidity: 100
          }
        }
      },
      routeParams: {
        cityState: 'Seattle'
      }
    };

    const component = renderer.create(
      <DetailPage {...props} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});