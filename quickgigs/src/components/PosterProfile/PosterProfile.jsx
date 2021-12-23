import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const PosterProfile = (props) => {
    const [posterProfile,setPosterProfile] = useState([''])
  
//     useEffect(()=>{
//       getCurrentUser();
//   },[getCurrentUser]);
  
  async function getCurrentUser(){
    try{
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/job_poster/<int:pk>/${props.user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setPosterProfile(response.data)})
    }
    catch{
        const refreshtoken = localStorage.getItem('refresh');
        let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
        localStorage.setItem('token', refreshResponse.data.access)
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/job_poster/<int:pk>/${props.user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setPosterProfile(response.data)})
     }
    }
}



export default PosterProfile;