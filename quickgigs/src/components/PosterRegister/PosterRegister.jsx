import react, {useState} from 'react'
import axios from 'axios'


const PosterRegister = (props) => {

const [company_name, setCompany_Name] = useState("")
const [email, setEmail] = useState("")
const [phone_number, setPhone_Number] = useState("")
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")


    const handleSubmit = async (e) =>{
        e.preventDefault();
        let registerUser = {
            "company_name": company_name,
            "email": email,
            "phone_number": phone_number,
            "username": username,
            "password": password,
        
        }
        
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/job_poster/', registerUser);
        console.log(response.data)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Company Name</label>
            <input type='text' onChange={(e => setCompany_Name(e.target.value))}></input><br />
            <label>Email</label>
            <input type='text' onChange={(e => setEmail(e.target.value))}></input><br />
            <label>Phone Number</label>
            <input type='text' onChange={(e => setPhone_Number(e.target.value))}></input><br />
            <label>UserName</label>
            <input type='text' onChange={(e)=> setUsername(e.target.value)}></input><br />
            <label>Password</label>
            <input type='text' onChange={(e => setPassword(e.target.value))}></input><br />
            <button type='submit'>Register</button>
        </form>

        
    )
}


export default PosterRegister;