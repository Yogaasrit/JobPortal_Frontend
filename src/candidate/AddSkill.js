import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CandidateNavBar from '../layout/CandidateNavBar';

const AddSkill = () => {

  const navigate = useNavigate()

  const [skill, setSkill] = useState({
    userid: '',
    name: '',
    level: '',
    experience: '',
    handson: ''
  });

  const {userid, name, level, experience, handson } = skill;

  const handleChange = (e) => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9090/add-skill",skill)
    alert("Skill added succesfully")
    navigate("/candidate-dashboard", { state: { userId: userid } });
  };

  return (
    <div>
      <CandidateNavBar />
      <div className="container">
      <div className="card p-5 shadow" style={{ maxWidth: "900px", margin: "auto", marginTop: "20px" }}>
        <h2 className="card-title text-center mb-4">Add Skill</h2>
        <form onSubmit={(event) => handleSubmit(event)} style={{ backgroundColor: "#ADD8E6", padding: "20px", borderRadius: "8px" }}>
          <div className="mb-3">
            </div>
            <div className="mb-3">
              <label htmlFor="userid" className="form-label">
                User ID
              </label>
              <input
                type="number"
                className="form-control"
                id="userid"
                name="userid"
                value={userid}
                onChange={(event)=>handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Skill Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={(event)=>handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="level" className="form-label">
                Level
              </label>
              <input
                type="text"
                className="form-control"
                id="level"
                name="level"
                value={level}
                onChange={(event)=>handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="experience" className="form-label">
                Experience(Years)
              </label>
              <input
                type="number"
                className="form-control"
                id="experience"
                name="experience"
                value={experience}
                onChange={(event)=>handleChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="handson" className="form-label">
                Hands-on-Experience
              </label>
              <input
                type="text"
                className="form-control"
                id="handson"
                name="handson"
                value={handson}
                onChange={(event)=>handleChange(event)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/candidate-dashboard" className="btn btn-secondary ms-2">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default AddSkill;
