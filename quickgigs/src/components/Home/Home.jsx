



// import React from "react";
import { useState, useEffect, Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

import { render } from "react-dom";

class Home extends Component {


    render(){
        return ( 
            <>
            <a href="./login" target="_blank">
                <button>Login</button>
            </a>
            <a href="./PosterRegister" target="_blank">
                <button>Company Register</button>
            </a>
            <a href="./SeekerRegister" target="_blank">
                <button>Individual Register</button>
            </a>
            </>
        );

    }
}



export default Home;