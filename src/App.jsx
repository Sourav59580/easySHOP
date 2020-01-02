import React, { Component } from 'react'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Home from "./home.jsx"
import Nav from "./nav.jsx"
import About from "./About.jsx"
export default class App extends Component {
  render() {
    return (
     <Router>
        <Nav /> 
         <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" component={About}/>
        </Switch> 
    </Router>
    )
  }
}
