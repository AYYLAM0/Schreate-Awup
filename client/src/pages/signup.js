import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="login-box">

            <h3 className="login-header">Sign Up</h3>
            <div className="login-body">
                <form className="form-group">

                    <div>
                        {/* <label>Username</label> */}
                        <input type="username" className="form-control bg-white" placeholder="Username" />
                    </div>

                    {/* <label>Password</label> */}
                    <input type="password" className="form-control bg-white mt-2" placeholder="Password" />

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