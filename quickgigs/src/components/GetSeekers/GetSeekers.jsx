import react, {useEffect, useState} from 'react'
import axios from 'axios'

const GetSeekers = (props) => {

    const [seekers, setSeekers] = useState([])

    const getAllSeekers = () =>{
        let response = await axios.get("http://127.0.0.1:8000/api/job_seeker/seekers/", {headers:{Authorization: "Bearer" + localStorage.getItem('token')}})
        console.log(response.data)
        setSeekers(response.data)
        
    }

    useEffect(() =>{
        getAllSeekers();
    }, [])
    
    return(
        <div>
            {job_seeker.map((Seeker)=>{
                <div>{Seeker.first_name}</div>
            })}
        </div>
    )

}

export default GetSeekers;