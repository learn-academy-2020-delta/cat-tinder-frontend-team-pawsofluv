import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import mockCats from './mockCats.js'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: mockCats
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#ede4d9"
    document.body.style.fontFamily = "Architects Daughter, cursive"
  }

  render() {
    return (
      <>
        <div className="app">
          <Router>
            <Header />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/catindex" component={CatIndex} />
              <Route path="/catshow/:id" component={CatShow} />
              <Route path="/catnew" component={CatNew} />
              <Route path="/catedit/:id" component={CatEdit} />
              <Route component={NotFound} />
            </Switch>

            <Footer />
          </Router>
        </div>
      </>
    )
  }
}

export default App
