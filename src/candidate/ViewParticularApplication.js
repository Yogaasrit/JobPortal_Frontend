import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ViewParticularApplication = () => {
  const location = useLocation();

  const jobid = location.state.jobid;
  console.log(jobid);

  const [application, setApplication] = useState(null);

  useEffect(() => {
    fetchApplication();
  }, [jobid]);

  const fetchApplication = async () => {
    try {
      const response = await axios.get(`http://localhost:9090/view-particular-application/${jobid}`);
      setApplication(response.data);
    } catch (error) {
      console.error('Error fetching application:', error);
    }
  };

  return (
    <div className="container">
      <h2>Application Details</h2>
      {application ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{application.jobtitle}</h5>
            <p className="card-text">
              <label>Company: </label>{application.company}<br />
              <label>Location: </label>{application.location}<br />
              <label>Requirements: </label>{application.requirements}<br />
              <label>Description: </label>{application.jobdescription}<br />
              <label>Qualification: </label>{application.qualification}<br />
              <label>Applicants Required: </label>{application.applicantrequired}<br />
              <label>Salary: </label>{application.salary}<br />
              <label>Shift: </label>{application.shift}<br />
              <label>Posted At: </label>{application.postedat}<br />
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewParticularApplication;
