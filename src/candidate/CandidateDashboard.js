import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useLocation, useNavigate } from "react-router-dom";
import CandidateNavBar from "../layout/CandidateNavBar";

const CandidateDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState({});

  const navigate = useNavigate()

  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const response = await axios.get("http://localhost:9090/view-jobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleApply = (jobId) => {
    // Toggle applied status for the job
    axios.post(`http://localhost:9090/apply-job/${userId}/${jobId}`);
    setAppliedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  const handleSubmit =(userId)=>{
    navigate("/view-applied-jobs",{state:{userId:userId}})
  }
  return (
    <div>
      <CandidateNavBar userId={userId} />
      <br></br>

      <button
        className="btn btn-outline-danger me-4"
        onClick={()=>{handleSubmit(userId)}}
      >
        Applied Jobs
      </button>
      <p>Click here to view previously applied jobs!</p>
      <hr></hr>
      <h2>List of job openings</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              width: "30%",
              marginBottom: "20px",
              padding: "20px",
              backgroundColor: "#ADD8E6",
              borderRadius: "10px",
            }}
          >
            <h3>{job.jobtitle}</h3>
            <div style={{ textAlign: "left" }}>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Requirements:</strong> {job.requirements}
              </p>
              <p>
                <strong>Description:</strong> {job.jobdescription}
              </p>
              <p>
                <strong>Qualification:</strong> {job.qualification}
              </p>
              <p>
                <strong>Applicants Required:</strong> {job.applicantrequired}
              </p>
              <p>
                <strong>Salary:</strong> {job.salary}
              </p>
              <p>
                <strong>Shift:</strong> {job.shift}
              </p>
              <p>
                <strong>Posted At:</strong> {job.postedat}
              </p>
            </div>
            <button
              onClick={() => handleApply(job.jobid)}
              style={{
                backgroundColor: appliedJobs[job.jobid] ? "green" : "#007BFF",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              {appliedJobs[job.jobid] ? "Applied" : "Apply"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateDashboard;
