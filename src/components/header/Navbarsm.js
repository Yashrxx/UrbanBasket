import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbarsm = () => {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
  let location=useLocation();
  useEffect(()=>{
  },[location])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/urbanBasket"?"active":""} aria-current="page"`} to="/urbanBasket">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/todo" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex">
        <Link className='btn btn-primary mx-3' to='/login' role='button'>Login</Link>
        <Link className='btn btn-primary' to='/signup' role='button'>Sign up</Link>
        </form>
        :<Link onClick={handleLogout} className='btn btn-primary' to='/login' role='button'>Logout</Link>}
    </div>
  </div>
</nav>
  )
}

export default Navbarsm;