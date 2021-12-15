import react, {useState} from 'react'
import axios from 'axios'


const Register = (props) => {
    const [first_name, setFirst_Name] = useState("")
    const [last_name, setLast_Name] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
 

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let registerUser = {
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "username": username,
            "password": password,
        
        }
        
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', registerUser);
        console.log(response.data)
    }

    return(
        <form onSubmit={handleSubmit}>
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
            <a href="http://127.0.0.1:8000/api/auth/register/job_poster/">Click Here To Register Company</a>
        </form>

        
    )
}

export default Register;