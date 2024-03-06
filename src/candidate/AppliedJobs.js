import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CandidateNavBar from "../layout/CandidateNavBar";

const AppliedJobs = () => {
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId);

  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9090/view-application/${userId}`
      );
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when userId changes

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9090/delete-application/${id}`);
    alert("Application deleted successfully");
    // After deleting, fetch updated application list
    fetchData();
  };

  const handleView = async(jobid)=>{
    navigate("/view-particular-application",{state:{jobid:jobid,}})
  } 
  return (
    <div>
      <CandidateNavBar />
      <div className="container">
        <br />
        <h2>Applied Jobs</h2>
        <div className="py-4">
          {applications.length > 0 ? (
            <table
              className="table shadow"
              style={{ backgroundColor: "#ADD8E6" }}
            >
              <thead>
                <tr
                  style={{ backgroundColor: "#87CEEB" }}
                  className="table-info"
                >
                  <th scope="col">Application Id</th>
                  <th scope="col">Job Id</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application, index) => (
                  <tr className="table-light" key={index}>
                    <td>{application.applicationid}</td>
                    <td>{application.jobid}</td>
                    <td>{application.status}</td>
                    <td>
                      <button className = "btn btn-primary" onClick={()=>handleView(application.jobid)}>View Details</button>
                      <button
                        onClick={() => handleDelete(application.applicationid)}
                        type="submit"
                        className="btn btn-danger mx-2"
                      >
                        Withdraw
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No applications available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
