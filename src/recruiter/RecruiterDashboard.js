import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RecruiterNavBar from "../layout/RecruiterNavBar";

const RecruiterDashboard = () => {
  const location = useLocation();
  const recruiterId = location.state.recruiterId;
  console.log(recruiterId);

  const navigate = useNavigate();

  const handleAddJob = () => {
    console.log("Run");
    navigate("/add-job", { state: { recruiterId: recruiterId } });
  };

  const handleViewApplicants =()=>{
    navigate("/view-applicants",{state:{recruiterId:recruiterId}});
  }
  return (
    <div>
      <RecruiterNavBar />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "20px",
          }}
        >
          <button
            type="button" 
            onClick={handleAddJob} 
            style={{
              width: "10cm",
              height: "5cm",
              backgroundColor: "#5072A7",
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            Add Job
          </button>
          <button
            onClick={()=>{handleViewApplicants()}}
            style={{
              width: "10cm",
              height: "5cm",
              backgroundColor: "#008E97",
              fontSize: "24px",
            }}
          >
            View Applicants
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            style={{
              width: "10cm",
              height: "5cm",
              backgroundColor: "#ADD8E6",
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            Button 2
          </button>
          <button
            style={{
              width: "10cm",
              height: "5cm",
              backgroundColor: "#99FFFF",
              fontSize: "24px",
            }}
          >
            Button 4
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
