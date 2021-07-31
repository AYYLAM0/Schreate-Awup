import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import API from '../utils/API'

const Signup = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);
        API.createUser({ username, password })
        .then((response) => {
            console.log(response)
        })
     
    };

    return (
        <div className="login-box">

            <h3 className="login-header">Sign Up</h3>
            <div className="login-body">
                <form className="form-group" onSubmit={handleSubmit}>

                    <div>
                        {/* <label>Username</label> */}
                        <input
                         type="text" 
                         className="form-control bg-white" 
                         placeholder="Username" 
                         name ="username"
                         onChange={e=> setUsername(e.target.value)}
                         />
                    </div>

                    {/* <label>Password</label> */}
                    <input 
                    type="password" 
                    className="form-control bg-white mt-2" 
                    placeholder="Password" 
                    name ="password"
                    onChange={e=> setPassword(e.target.value)}
                    />

                    <div className="mb-3 d-flex justify-content-center">
                        <button type="submit" className="form-control btn btn-outline-success mt-3">Sign-up!</button>
                    </div>

                    <Link className="login-link d-flex justify-content-center " to="/">
                        Already have an account? Login here!
                    </Link>

                </form>
            </div>



        </div>
    )
}

export default Signup;