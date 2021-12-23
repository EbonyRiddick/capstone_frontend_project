import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Login from './components/login/login';
import SeekerRegister from './components/SeekerRegister/SeekerRegister';
import PosterRegister from './components/PosterRegister/PosterRegister';
import {Link} from "react-router-dom"
// import Logout from './components/logout/logout';
import axios from 'axios';
import React, {useState, useEffect, Component} from 'react';
// import { render } from 'react-dom';
import './App.css'


class App extends Component {



  render(){
    return (
      <Router>
        <Switch>
          <Route exact path ="/" component = {Login} />
          <Route path="/SeekerRegister" component={SeekerRegister}/> 
          <Route path="/PosterRegister" component={PosterRegister}/>      
          {/* <SeekerRegister></SeekerRegister>
          <PosterRegister></PosterRegister> */}
        </Switch>
      </Router>

      );
  }
}

export default App;
