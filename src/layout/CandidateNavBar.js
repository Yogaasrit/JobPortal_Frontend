import React from "react";
import { Link } from "react-router-dom";

const CandidateNavBar = ({ userId }) => {
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
              <Link className="btn btn-outline-dark me-4" to="/add-profile">
                Profile
              </Link>
              <Link className="btn btn-outline-dark me-4" to="/skill">
                My Skills
              </Link>
              {/* <p className="text-light mb-0 ms-4">User ID: {userId}</p> */}
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CandidateNavBar;
