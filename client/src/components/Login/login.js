import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import API from '../../utils/API'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    API.signIn({ username, password})
    .then(res => {
        console.log(res)
    })
    }

    let history = useHistory();

 
    return (
        <div>
            <div className="login-box" >
                <div className="login-header">Login</div>
                <div className="login-body">
                    <form className="form-group" onSubmit={handleSubmit}>
                        <div>
                            {/* <label>Username</label> */}
                        <input 
                        type="username" 
                        className="form-control bg-white"
                        placeholder="Username" 
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                         />
                        </div>
                        
                        {/* <label>Password</label> */}
                        <input 
                        type="password" 
                        className="form-control bg-white mt-2" 
                        placeholder="Password"
                        name="password"
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                        
                        <input 
                        type="submit" 
                        value="Login" 
                        className="form-control btn btn-outline-primary mt-3 " 
                        name="" 
                        onClick={() => { history.push('/mainpage') }}/>

                        <Link to="/signup">
                        <input type="submit" value="Signup" className="form-control btn btn-outline-success mt-3 " name="" />
                        </Link>

                        
                        
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;