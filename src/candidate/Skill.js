import React from "react";
import { Link } from "react-router-dom";
import CandidateNavBar from "../layout/CandidateNavBar";

const Skill = () => {
  return (
    <div>
      <CandidateNavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#AFEEEE",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "10cm",
              height: "5cm",
              fontSize: "24px",
              marginRight: "10px",
              backgroundColor: "#00CCCC",
              color: "#082567",
              textDecoration: "none",
            }}
            className="btn btn-secondary shadow"
            type="submit"
            to="/add-skill"
          >
            <strong>Add Skill</strong>
          </Link>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "10cm",
              height: "5cm",
              fontSize: "24px",
              backgroundColor: "#00CCCC",
              color: "#082567",
              textDecoration: "none",
            }}
            className="btn btn-primary shadow"
            to="/GetUserId"
          >
            <strong>View/Upgrade/Delete Skill</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skill;
