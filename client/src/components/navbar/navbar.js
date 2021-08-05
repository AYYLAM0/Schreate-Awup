import React from 'react';
import { Link } from 'react-router-dom'
import API from "../../utils/API"


const Navbar = () => {
 
  const logOut = () => {
    API.logout().then(response => {
      console.log(response)
    })
  }

  return (
    <div className='nav-container'>
      <nav className="navbar navbar-expand-lg navbar-toggleable-sm">
        <div className="container-fluid d-flex justify-content-center">
          <div className="list-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="link px-2 text-warning" to='/mainpage' >Dashbord</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="link text-warning" to='/newform' >New Job</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="link text-warning" to='/currentjobs' >Current Jobs</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="link text-warning" to='' onClick={logOut}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;