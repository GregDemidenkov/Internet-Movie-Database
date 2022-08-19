import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import './styles/index.scss';
import './styles/main.scss';
import './styles/films-serials.scss';
import './styles/filmCart.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
