// import react, {useEffect, useState} from 'react'
// import axios from 'axios'

// const GetSeekers = (props) => {

//     const [seekers, setSeekers] = useState([])

//     const getLoggedInSeekers = () =>{
//         let response = await axios.get('http://127.0.0.1:8000/job_seeker/SeekerProfile/', {headers:{Authorization: "Bearer" + localStorage.getItem('token')}})
//         console.log(response.data)
//         setSeekers(response.data)
        
//     }

//     useEffect(() =>{
//         getLoggedInSeekers();
//     }, [])

//     return(
//         <div>
//             {seekers.map((SeekerProfile)=>{
//                return <div>{SeekerProfile.name}</div>
//             })}
//         </div>
//     )

// }

// export default GetSeekers;