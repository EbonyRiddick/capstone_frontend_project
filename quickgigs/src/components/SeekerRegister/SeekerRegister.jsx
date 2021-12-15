import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Component, Route, Link } from 'react';
import { Redirect } from "react-router";
import './SeekerRegister.css'
import { render } from "react-dom";


// const SeekerRegister = (props) => {
//     const [first_name, setFirst_Name] = useState("")
//     const [last_name, setLast_Name] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone_number, setPhone_Number] = useState("")
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
 
class SeekerRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {

            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            username: '',
            password: '',
            is_company: false,
            is_Active: false,
        }
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        let newSeeker = {
            "first_name": this.state.first_name,
            "last_name": this.state.last_name,
            "email": this.state.email,
            "phone_number": this.state.phone_number,
            "username": this.state.username,
            "password": this.state.password,
            "is_company": this.state.is_company,
            "is_Active": this.state.is_Active
        }
        this.registerSeeker(newSeeker)
    }
    async registerSeeker(seeker){
        try{
            const jwt =localStorage.getItem('token');
            let response = await axios.post(`http://127.0.0.1:8000/api/auth/register/job_seeker/`, seeker).then(response => {this.userProfile(response.data.id, response.data.first_name)})
        } 
        catch (e) {
            console.log("API call failed");
        }
        
    }

}

render() {
    if (this.state.isRegistered) {
        return <Redirect to = {{ pathname: "/home",state:{ id :this.state.userId} }} />;
    }
    return(
        <form className= "register" onSubmit={(event) => this.handleSubmit (event)}>
            <label>First Name</label>
            <input type='text' onChange={(e => setFirst_Name(e.target.value))}></input>
            <label>Last Name</label>
            <input type='text' onChange={(e => setLast_Name(e.target.value))}></input>
            <label>Email</label>
            <input type='text' onChange={(e => setEmail(e.target.value))}></input>
            <label>UserName</label>
            <input type='text' onChange={(e)=> setUsername(e.target.value)}></input>
            <label>Password</label>
            <input type='text' onChange={(e => setPassword(e.target.value))}></input><br />
            <button type='submit'>Register</button>
            <br />
            <a  href="http://127.0.0.1:8000/api/auth/register/job_poster/">Click Here To Register Company</a>
        </form>

        
    )
}


export default SeekerRegister;