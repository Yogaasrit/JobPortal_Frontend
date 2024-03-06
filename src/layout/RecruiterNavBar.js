import React from 'react'
import { Link } from 'react-router-dom';

const RecruiterNavBar = () => {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info border-bottom border-body shadow">
          <div className="container-md">
            <Link className="navbar-brand text-dark" to="/candidate-dashboard">
              <strong>YOVKRI Jobportal</strong>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <div className="d-flex">
                <Link className="btn btn-outline-dark me-4" to="/view-profile">
                  Profile
                </Link>               
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default RecruiterNavBar