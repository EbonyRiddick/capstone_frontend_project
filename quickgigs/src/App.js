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

//   }

//   <Router>
//         <Switch>
//             <Route exact path='/' component={Login} />
//             <Route exact path='/register' component={Register} />
//             {/* <Route exact path='/' component={Contact} /> */}
//             {/* <Route exact path='/listings' component={Listings} /> */}
//             {/* <PrivateRoute exact path='/listings/:id' component={ListingDetail} /> */}
//             {/* <Route component={NotFound} /> */}
//         </Switch>
// </Router>



  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       <Login></Login>
  //       <Register></Register>
  //       {/* <Logout></Logout> */}

  //     </header>
  //   </div>
  // );


export default App;
