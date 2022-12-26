import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Inicio from './components/Inicio';


export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          
        </Routes>
    </BrowserRouter>

    )
  }
}
