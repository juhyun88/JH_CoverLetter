import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Hd from './layout/Hd';

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/layout.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Hd></Hd>
  <div>기본고딕체</div>
  <div className='activeF bg-dark text-white'>이건 뭐징</div>
  <div className='activeO'>너는 또 뭐징</div>
  </BrowserRouter>
);

