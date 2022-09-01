import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import './styles/constants.scss';
import './styles/index.scss';
import './styles/main.scss';
import './styles/films-serials.scss';
import './styles/filmCart.scss';
import './styles/form.scss';
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
