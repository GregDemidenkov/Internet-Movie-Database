import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import 'assets/styles/constants.scss';
import 'assets/styles/index.scss';
import 'assets/styles/main.scss';
import 'assets/styles/films-serials.scss';
import 'assets/styles/filmCart.scss';
import 'assets/styles/form.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals();
