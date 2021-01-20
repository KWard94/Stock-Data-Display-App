import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// the below Route will render all components within and including App
ReactDOM.render(
  <Router>
    <Route to='*' component={App}/>
      
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
