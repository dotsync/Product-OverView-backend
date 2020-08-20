import React from 'react';
import ReactDom from 'react-dom';
import AppContainer from './components/AppContainer.jsx';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDom.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
  , document.getElementById('root'));