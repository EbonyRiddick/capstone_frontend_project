import React, {Component} from 'react';
import {render} from 'react-dom';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './login/login';
import jwtDecode from 'jwt-decode';
import NavBar from './NavBar/NavBar';
import SeekerRegister from './SeekerRegister/SeekerRegister';
import SeekerProfile from './SeekerProfile/SeekerProfile';
import PosterRegister from './PosterRegister/PosterRegister';
import PosterProfile from './PosterProfile/PosterProfile';
import Home from './Home/Home';
import Logout from './logout/logout';
import axios from 'axios';


class App extends Component{
  state ={
    user:''
  }

  componentDidMount() {
    let jwt = localStorage.getItem('token');
    let refresh = localStorage.getItem('refresh');
    try{
        const user = jwtDecode(jwt);
        this.setState({user});
    }
    catch{
        
    }
  }

  render (){
    const user = this.state.user;
    return(
        <div className = "App">
            <NewNavBar className="navbar" user = {user}/>   
            <Switch>
                <Route exact path ='/'  render = {props => {
                    if (!user){
                        return <Redirect to ="/login"/>
                    }else{
                        return <Home {...props} user = {user} />
                    }
                }}
                />
                <Route exact path="/home" component={Home}/>
                <Route path="/seekerProfile" render = {props=> <SeekerProfile {...props} user = {this.state.user}/>}/>
                <Route path="/seekerregister" component={SeekerRegister}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component = {Login}/>
                <Route path="/logout" component = {Logout}/>
                <Route path="/posterProfile" render = {props=> <PosterProfile {...props} user = {user}/>}/>
                <Route path="/posterregister" component={PosterRegister}/>
            </Switch>
        </div>
        )
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
