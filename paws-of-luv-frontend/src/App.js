import React, { Component } from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// import mockCats from './mockCats.js'

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
      cats: ""
    }
  }

  createNewCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    // console.log(newCat)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  editCat = (cat, id) => {
    console.log("Edit cat:", cat)
    console.log("ID:", id)
  }

  componentDidMount(){
    this.catIndex()
  }

  catIndex = () => {
    fetch("http://localhost:3000/cats") //must follow rails restful route
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(catsArray => {
      console.log(catsArray)
      this.setState({ cats: catsArray }) //getting cats from backend DB
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  render() {
    return (
      <>
        <div id="page-content">
          <div id="content-wrap">
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
                    if (this.state.cats){
                      let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                      return (
                        <CatShow cat={cat} />
                      )
                    }
                  }}
                />
                <Route
                  path="/catnew"
                  render={(props) => <CatNew createNewCat={this.createNewCat} />}
                />
                <Route
                  path="/catedit/:id"
                  render={(props) => {
                    let id = props.match.params.id
                    let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                    return (
                      <CatEdit cat={cat} editCat={this.editCat} />
                    )
                  }}
                />
                <Route
                  component={NotFound}
                />
              </Switch>

              <Footer id="footer" />
            </Router>
          </div>
        </div>
      </>
    )
  }
}

export default App
