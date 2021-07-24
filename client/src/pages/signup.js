import React from 'react'
import { Link } from 'react-router-dom';



const Signup = () => {
    return (
        <div class="container login-box ">

            <h3 class=" text-center">Sign Up</h3>

            <form id="signup-form" class="card-body">

                <div class="mb-3 d-flex justify-content-center">
                    <label for="username-signup" class="form-label ">  </label>
                    <input id="username-signup" type="text" class="form-input" placeholder="username" />
                </div>

                <div class="mb-3 d-flex justify-content-center">
                    <label class="form-label " for="password-signup"></label>
                    <input id="password-signup" type="password" class="form-input" placeholder="password" />
                </div>

                <div class="mb-3 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Sign-up!</button>
                </div>

                <Link class="login-link d-flex justify-content-center " to="/">Already have an account? Login here!
                
                </Link>

            </form>

        </div>
    )
}

export default Signup;