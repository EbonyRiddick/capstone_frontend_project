import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const SeekerProfile = (props) => {
    const [userProfile,setUserProfile] = useState([''])
  
    useEffect(()=>{
      getCurrentUser()
  },[])
  
  async function getCurrentUser(){
    try{
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/workout/${props.user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setUserProfile(response.data)})
    }
    catch{
        const refreshtoken = localStorage.getItem('refresh');
        let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
        localStorage.setItem('token', refreshResponse.data.access)
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/workout/${props.user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setUserProfile(response.data)})
     }
    }
}

return (
    userProfile
)

export default SeekerProfile;