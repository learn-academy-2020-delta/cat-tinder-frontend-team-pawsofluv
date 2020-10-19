import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <CatIndex />
        <CatShow />
        <CatNew />
        <CatEdit />
        <NotFound />
        <Footer />
      </>
    )
  }
}

export default App
