import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="login-box" >
                <div className="login-header">Login</div>
                <div className="login-body">
                    <form className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" name="" />
                        <label>Password</label>
                        <input type="password" className="form-control" name="" />
                        
                        <input type="submit" value="Login" className="form-control btn btn-primary " name="" />
                        <Link to="/signup">
                        <input type="submit" value="Signup" className="form-control btn btn-success mt-3 " name="" />
                        </Link>

                        
                        
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Login;