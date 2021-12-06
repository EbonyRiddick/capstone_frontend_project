import react, {useState} from 'react'
import axios from 'axios'

const Login = (props) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let user = {
            "username": userName,
            "password": password
        }
        let response = await axios.post('http://127.0.0.1.8000/api/auth/register/', user);
        console.log(response.data)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type='text' onChange={(e)=> setUserName(e.target.value)}></input>
            <label>password</label>
            <input type='text' onChange={(e => setPassword(e.target.value))}></input>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;