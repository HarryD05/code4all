//React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

//Components
import App from './App';

//Styling
import './index.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
