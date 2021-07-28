import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Login = () => {
    return (
        <div>
            <div className="login-box" >
                <div className="login-header">Login</div>
                <div className="login-body">
                    <form className="form-group">
                        <div>
                            {/* <label>Username</label> */}
                        <input type="username" className="form-control bg-white" placeholder="Username" />
                        </div>
                        
                        {/* <label>Password</label> */}
                        <input type="password" className="form-control bg-white mt-2" placeholder="Password" />
                        
                        <input type="submit" value="Login" className="form-control btn btn-outline-primary mt-3 " name="" />

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