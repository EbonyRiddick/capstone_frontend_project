import React, { Component } from "react";

import {Link} from "react-router-dom"


class SignUp extends Component{
    
    render(){
        return (
            <div>
                <Link to= "/SeekerRegister">
                <button type="botton" >Sign Up as Individual</button>
                </Link>

                <Link to= "/PosterRegister">
                <button type="botton">Sign Up as Company</button>
                </Link>
            </div>
        )
    }
}
export default SignUp;