import React from 'react';
import { Route, Routes } from 'react-router-dom'

import {Main, Films, Serials, FilmPage, FormPage} from './pages'
import {Layout} from './components'


const App = () => {
  return (
      <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element = {<Main />}></Route>
            <Route path = "films" element = {<Films />}></Route>
            <Route path = "serials" element = {<Serials />}></Route>
            <Route path = "formPage" element = {<FormPage />}></Route>
            <Route path = "filmPage/:id" element = {<FilmPage />}></Route>
          </Route>
      </Routes>
  );
}

export default App;
