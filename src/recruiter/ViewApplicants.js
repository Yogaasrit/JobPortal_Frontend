import axios from "axios";
import React, { useState, useEffect } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import RecruiterNavBar from "../layout/RecruiterNavBar";

const ViewApplicants = () => {

  const navigate = useNavigate()

  const location = useLocation();
  const recruiterId = location.state.recruiterId;
  console.log(recruiterId)

  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    loadApplicants();
  }, []);

  const loadApplicants = async () => {
    try {
      const response = await axios.get(`http://localhost:9090/applicants/7`);
      setApplicants(response.data);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  const handleViewSkills = (userId) => {
    navigate("/view-candidate-skill",{state:{userId:userId}})
  };

  const handleViewProfile = (userId) => {
    navigate("/view-candidate-profile",{state:{userId:userId}})
  };

  const handleSelectApplicant = (userId) => {
    axios.get(`http://localhost:9090/update-status/${userId}`)
  };

  const handleRejectApplicant = (applicantId) => {
    axios.get(`http://localhost:9090/update-status-reject/${userId}`)
  };

  return (
    <div>
      <RecruiterNavBar />
      <div className="container">
        <br />
        <h2>Applicants</h2>
        <div className="py-4">
          {applicants.length > 0 ? (
            <table className="table shadow" style={{ backgroundColor: "#ADD8E6" }}>
              <thead>
                <tr style={{ backgroundColor: "#87CEEB" }} className="table-info">
                  <th scope="col">Application ID</th>
                  <th scope="col">User ID</th>
                  <th scope="col">Job ID</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant) => (
                  <tr className="table-light" key={applicant.applicationid}>
                    <td>{applicant.applicationid}</td>
                    <td>{applicant.userid}</td>
                    <td>{applicant.jobid}</td>
                    <td>{applicant.status}</td>
                    <td>
                      <button className="btn btn-primary mx-2" onClick={() => handleViewSkills(applicant.userid)}>View Skills</button>
                      <button className="btn btn-warning mx-2" onClick={() => handleViewProfile(applicant.userid)}>View Profile</button>
                      <button className="btn btn-success mx-2" onClick={() => handleSelectApplicant(applicant.userid)}>Select</button>
                      <button className="btn btn-danger mx-2" onClick={() => handleRejectApplicant(applicant.userid)}>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No applicants available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewApplicants;
