//React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

//Components
import App from './App';

//Context
import LocationProvider from './context/LocationContext';

//Styling
import './index.scss';

ReactDOM.render(
  <LocationProvider>
    <Router><App /></Router>
  </LocationProvider>,
  document.getElementById('root')
);
