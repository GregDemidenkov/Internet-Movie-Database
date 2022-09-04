import React from 'react';
import { Route, Routes } from 'react-router-dom'

import {Main, Films, FilmPage, FormPage} from './pages'
import {Layout} from './components'


const App = () => {
  return (
      <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element = {<Main />}></Route>
            <Route path = "films" element = {<Films page = "films" />}></Route>
            <Route path = "serials" element = {<Films page = "serials" />}></Route>
            <Route path = "formPage" element = {<FormPage />}></Route>
            <Route path = "filmPage/:id" element = {<FilmPage />}></Route>
          </Route>
      </Routes>
  );
}

export default App;
