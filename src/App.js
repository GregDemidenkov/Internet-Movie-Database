import React from 'react';
import { Route, Routes } from 'react-router-dom'

import {Layout} from 'components/common/Layout'
import {Main} from 'pages/Main'
import {Films} from 'pages/Films'
import {FormPage} from 'pages/FormPage'
import {FilmPage} from 'pages/FilmPage'

import {paths} from './routing/config'


const App = () => {
  return (
      <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element = {<Main />}></Route>
            <Route path = {paths.films} element = {<Films page = "films" />}></Route>
            <Route path = {paths.serials} element = {<Films page = "serials" />}></Route>
            <Route path = {paths.formPage} element = {<FormPage />}></Route>
            <Route path = {paths.filmPage} element = {<FilmPage />}></Route>
          </Route>
      </Routes>
  );
}

export default App;
