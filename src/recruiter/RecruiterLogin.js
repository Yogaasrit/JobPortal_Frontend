import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/NavBar";

const RecruiterLogin = () => {
  const navigate = useNavigate();

  const [recruiter, setRecruiter] = useState({
    email: "",
    password: "",
  });

  const { email, password } = recruiter;

  const updateChangeHandler = (event) => {
    setRecruiter({ ...recruiter, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const recruiterId = await axios.post(
      "http://localhost:9090/recruiter-login",
      recruiter
    );
    if (recruiterId.data !== 0) {
      console.log(recruiterId.data);
      navigate("/recruiter-dashboard", { state: { recruiterId: recruiterId.data } });
    } else {
      alert("Invalid credentials");
      navigate("/recruiter-login");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5 shadow " style={{ maxWidth: "900px" }}>
          <h2 className="card-title text-center mb-4"> Recruiter Login</h2>
          <form
            onSubmit={(event) => {
              onSubmitHandler(event);
            }}
          >
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLogin;
