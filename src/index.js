import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/layout.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 
  <Header></Header>
  <AboutMe></AboutMe>
  <Skills></Skills>
  <Projects></Projects>
  <Contact></Contact>
  <Footer></Footer>
  </BrowserRouter>
  
);

