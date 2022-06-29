import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'

function NavBar() {
  return ( 
    <nav className=" nav navbar navbar-expand bg-primary" >
  <div className="container-fluid" >
    <Link className="navbar-brand mainlinks" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active links" aria-current="page" to="/Home">Home</Link>
        <Link className="nav-link links" to="/Students">Students</Link>
        <Link className="nav-link links" to="/Contact">Contact</Link>
      
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar