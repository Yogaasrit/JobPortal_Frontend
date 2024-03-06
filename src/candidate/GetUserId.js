import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateNavBar from "../layout/CandidateNavBar";

const GetUserId = () => {
  const [userId, setUserId] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted UserId:", userId);
    // setSubmitted(true);
    navigate("/update-skill", { state: { userId: userId }});
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputStyle = {
    width: "calc(100% - 20px)", // Width of 100% minus the padding
    height: "50px",
    fontSize: "24px",
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ADD8E6",
    borderRadius: "5px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "calc(100% - 20px)", // Width of 100% minus the padding
    padding: "15px 30px",
    fontSize: "20px",
    backgroundColor: "#ADD8E6",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div><CandidateNavBar />
    <div style={containerStyle}>
      <form onSubmit={(event)=>{handleSubmit(event)}} style={formStyle}>
        <textarea
          style={inputStyle}
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button style={buttonStyle} type="submit">
          Submit
          
        </button>
      </form>
      {/* {submitted && <UpdateSkill userId={userId} />} */}
    </div>
    </div>
  );
};

export default GetUserId;
