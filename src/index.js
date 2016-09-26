import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory} routes={routes}/>,
  document.getElementById("root")
);
