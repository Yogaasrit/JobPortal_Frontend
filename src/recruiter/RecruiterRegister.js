import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/NavBar";

const RecruiterRegister = () => {
  let navigate = useNavigate();

  const [recruiter, setRecruiter] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = recruiter;

  const updateChangeHandler = (event) => {
    setRecruiter({ ...recruiter, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:9090/recruiter-register", recruiter);
    alert("Succesfully registered")
    navigate("/recruiter-login");
  };

  return (
    <div>
      <NavBar />

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5 shadow " style={{ maxWidth: "900px" }}>
          <h2 className="card-title text-center mb-4"> Recruiter Register</h2>
          <form
            onSubmit={(event) => {
              onSubmitHandler(event);
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="name"
                value={name}
                onChange={(event) => updateChangeHandler(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="useremail"
                name="email"
                value={email}
                onChange={(event) => updateChangeHandler(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="userpassword"
                name="password"
                value={password}
                onChange={(event) => updateChangeHandler(event)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-info btn-sm d-block mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecruiterRegister;
