import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux";

import {Main, Films, Serials, FilmPage} from './pages'
import {Layout} from './components'


const App = () => {
  return (
      <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element = {<Main />}></Route>
            <Route path = "films" element = {<Films />}></Route>
            <Route path = "serials" element = {<Serials />}></Route>
            <Route path = "filmPage/:id" element = {<FilmPage />}></Route>
          </Route>
      </Routes>
  );
}

export default App;
