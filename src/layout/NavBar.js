import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info border-bottom border-body shadow">
        <div className="container-md">
          <Link className="navbar-brand text-dark" to="/">
            YOVKRI Jobportal
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex">
              <Link className="btn btn-outline-dark me-4" to="/register">User Register</Link>
              <Link className="btn btn-outline-dark me-4" to="/login">User Login</Link>
              <Link className="btn btn-outline-dark me-4" to="/recruiter-register">Recruiter Register</Link>
              <Link className="btn btn-outline-dark" to="/recruiter-login">Recruiter Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
