import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/NavBar";

const Register = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });

  const { username, useremail, userpassword } = user;

  const updateChangeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:9090/register", user);
    alert("Registered Successful")
    navigate("/login");
  };

  return (
    <div>
      <NavBar />

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5 shadow " style={{ maxWidth: "900px" }}>
          <h2 className="card-title text-center mb-4">Register</h2>
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
                name="username"
                value={username}
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
