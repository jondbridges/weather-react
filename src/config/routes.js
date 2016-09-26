import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import HomePage from '../components/home/HomePage';
import ForecastPage from '../components/forecast/ForecastPage';
import DetailPage from '../components/forecast/detail/DetailPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/forecast/:cityState" component={ForecastPage} />
    <Route path="/detail/:cityState" component={DetailPage} />
  </Route>
);
