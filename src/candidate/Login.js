import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/NavBar";

const Login = () => {
  const navigate = useNavigate();

  const [candidate, setCandidate] = useState({
    useremail: "",
    userpassword: "",
  });

  const { useremail, userpassword } = candidate;

  const updateChangeHandler = (event) => {
    setCandidate({ ...candidate, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const userId = await axios.post("http://localhost:9090/login", candidate);
    console.log(userId);
    if (userId.data !== 0) {
      alert("Succesfull loggedIn")
      navigate("/candidate-dashboard", { state: { userId: userId.data } });
    }
    else {
      alert("Invalid credentials")
      navigate("/login");
    }
    
  };

  return (
    <div>
      <NavBar />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5 shadow " style={{ maxWidth: "900px" }}>
          <h2 className="card-title text-center mb-4"> User Login</h2>
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
                name="useremail"
                value={useremail}
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
                name="userpassword"
                value={userpassword}
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

export default Login;
