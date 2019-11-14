import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";

import './styles/main.scss';
import AtlasSkillCalcContainer from './containers/AtlasSkillCalcContainer';

ReactDOM.render(
  <BrowserRouter>
    <AtlasSkillCalcContainer />
  </BrowserRouter>,
  document.getElementById('root')
);
