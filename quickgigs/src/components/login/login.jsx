import React, {useState} from 'react'
import axios from 'axios'
import {FacebookLoginButton, LinkedInLoginButton} from 'react-social-login-buttons'
import { Link } from "react-router-dom";
import SignUp from '../SignUp/SignUp';

const Login = (props) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) =>{
        e.preventDefault();
        let user = {
            "username": userName,
            "password": password
        }
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', user);
        console.log(response.data)
        localStorage.setItem('token', response.data.access)
    }

    return(
        <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="username">UserName</label>
                    <input type='text' id="username"
                    className="formFieldInput" onChange={(e)=> setUserName(e.target.value)}></input><br />
                </div>
                <div className="formCenter">
                    <label className="formFieldLabel" htmlFor="password">password</label>
                    <input type='password' id="password"
                    className="formFieldInput" onChange={(e => setPassword(e.target.value))}></input><br />
                    <button type='submit'>Login</button>
                </div>

 

                <div className="socialMediaButtons">
                    <div className="facebookButton">
                        <FacebookLoginButton onClick={() => alert("You are being redirected")} />
                    </div>

                    <div className="linkedInButton">
                        <LinkedInLoginButton onClick={() => alert("You are being redirected")} />
                    </div>
                </div>
            </form>
            <SignUp></SignUp>
        </div>
    )
}

export default Login;