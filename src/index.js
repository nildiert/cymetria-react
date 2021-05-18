import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Garage from './Garage';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Garage color="red" /> */}
    <Header favcol="Amarillo" />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(Car, document.getElementById('root'));



reportWebVitals();
