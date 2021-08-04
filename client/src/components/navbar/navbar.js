

import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='nav-container'>
      <nav className="navbar navbar-expand-lg navbar-toggleable-sm">
        <div className="container-fluid d-flex justify-content-center">
          <div className="list-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="link px-2" to='/' >Homepage</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="link" to='/newform' >New Job</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="link" to='/Logout' >Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;