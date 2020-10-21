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

  createNewCat = (newCat) => {
    console.log(newCat)
  }

  editCat = (cat, id) => {
    console.log("Edit cat:", cat)
    console.log("ID:", id)
  }

  render() {
    return (
      <>
        <div className="app">
          <Router>
            <Header />

            <Switch>
              <Route
                exact path="/"
                component={Home}
              />
              <Route
                path="/catindex"
                render={(props) => <CatIndex cats={this.state.cats} />}
              />
              <Route
                path="/catshow/:id"
                render={(props) => {
                  let id = props.match.params.id
                  let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                  return (
                    <CatShow cat={cat} />
                  )
                }}
              />
              <Route
                path="/catnew"
                render = { (props) => <CatNew createNewCat = { this.createNewCat } /> }
              />
              <Route
                path="/catedit/:id"
                render={(props) => {
                  let id = props.match.params.id
                  let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                  return (
                    <CatEdit cat={cat} editCat = { this.editCat } />
                  )
                }}
              />
              <Route
                component={NotFound}
              />
            </Switch>

            <Footer />
          </Router>
        </div>
      </>
    )
  }
}

export default App
