import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateNavBar from "../layout/CandidateNavBar";

const AddProfile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    userid: 0,
    dob: "",
    address: "",
    phone: "",
    degree: "",
    university: "",
    cgpa: 0,
    yearofpassing: 0,
    interestedfield: "",
    interestedcompany: "",
    certification: "",
    experience: 0,
    languagesknown: 0,
  });

  const {
    userid,
    dob,
    address,
    phone,
    degree,
    university,
    cgpa,
    yearofpassing,
    interestedfield,
    interestedcompany,
    certification,
    experience,
    languagesknown,
  } = profile;

  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:9090/add-profile", profile);
    alert("Profile Added sucessfully")
    navigate("/candidate-dashboard", { state: { userId: userid } });
  };

  return (
    <div>
      <CandidateNavBar />
      <div className="container">
        <div
          className="card p-5 shadow"
          style={{
            maxWidth: "900px",
            margin: "auto",
            marginTop: "20px",
            backgroundColor: "#ADD8E6", 
          }}
        >
          <h2 className="card-title text-center mb-4">Add Profile</h2>
          <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-3">
              <label htmlFor="userid" className="form-label">
                User ID:
              </label>
              <input
                type="number"
                className="form-control"
                id="userid"
                name="userid"
                value={userid}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth:
              </label>
              <input
                type="date"
                className="form-control"
                name="dob"
                value={dob}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="degree" className="form-label">
                Degree:
              </label>
              <input
                type="text"
                className="form-control"
                name="degree"
                value={degree}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="university" className="form-label">
                University:
              </label>
              <input
                type="text"
                className="form-control"
                name="university"
                value={university}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cgpa" className="form-label">
                CGPA:
              </label>
              <input
                type="number"
                className="form-control"
                name="cgpa"
                value={cgpa}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="yearofpassing" className="form-label">
                Year of Passing:
              </label>
              <input
                type="number"
                className="form-control"
                name="yearofpassing"
                value={yearofpassing}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="interestedfield" className="form-label">
                Interested Field:
              </label>
              <input
                type="text"
                className="form-control"
                name="interestedfield"
                value={interestedfield}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="interestedcompany" className="form-label">
                Interested Company:
              </label>
              <input
                type="text"
                className="form-control"
                name="interestedcompany"
                value={interestedcompany}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="certification" className="form-label">
                Certification:
              </label>
              <input
                type="text"
                className="form-control"
                name="certification"
                value={certification}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="experience" className="form-label">
                Experience:
              </label>
              <input
                type="number"
                className="form-control"
                name="experience"
                value={experience}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="languagesknown" className="form-label">
                Languages Known:
              </label>
              <input
                type="text"
                className="form-control"
                name="languagesknown"
                value={languagesknown}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
