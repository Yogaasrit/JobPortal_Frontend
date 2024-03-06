import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RecruiterNavBar from "../layout/RecruiterNavBar";

const AddJob = () => {
  const location = useLocation();
  const recruiterId = location.state.recruiterId;
  console.log(recruiterId);

  const [jobData, setJobData] = useState({
    jobtitle: "",
    company: "",
    location: "",
    requirements: "",
    jobdescription: "",
    qualification: "",
    applicantrequired: 0,
    salary: 0,
    shift: "",
    postedat: new Date().toISOString().split("T")[0], // Set default value to current date
    id: recruiterId, // Set recruiter id from props
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9090/add-job", jobData);
      navigate("/recruiter-dashboard", { state: { recruiterId: recruiterId } });
      // navigate("/")
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <div>
      <RecruiterNavBar />
      <div
        style={{
          backgroundColor: "#ADD8E6",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Add New Job
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="jobtitle">Job Title:</label>
          <input
            type="text"
            id="jobtitle"
            name="jobtitle"
            value={jobData.jobtitle}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />

          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />

          <label htmlFor="requirements">Requirements:</label>
          <textarea
            id="requirements"
            name="requirements"
            value={jobData.requirements}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          ></textarea>

          <label htmlFor="jobdescription">Job Description:</label>
          <textarea
            id="jobdescription"
            name="jobdescription"
            value={jobData.jobdescription}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          ></textarea>

          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={jobData.qualification}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />

          <label htmlFor="applicantrequired">Applicant Required:</label>
          <input
            type="number"
            id="applicantrequired"
            name="applicantrequired"
            value={jobData.applicantrequired}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />

          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={jobData.salary}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />

          <label htmlFor="shift">Shift:</label>
          <input
            type="text"
            id="shift"
            name="shift"
            value={jobData.shift}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              alignSelf: "center",
              width: "150px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
