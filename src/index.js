import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Garage from './Garage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Garage color="red" />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(Car, document.getElementById('root'));



reportWebVitals();
