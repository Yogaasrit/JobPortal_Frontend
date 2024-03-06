import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CandidateNavBar from "../layout/CandidateNavBar";

const UpdateSkill = () => {

  const location = useLocation();

  const userId = location.state.userId;
  console.log(userId);

  const [userData, setUserData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9090/viewSkillById/${userId}`
        );
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching skill:", error);
      }
    };
    fetchData();
  }, [userId]);

  const handleDelete=async(id)=>{
   await axios.delete(`http://localhost:9090/delete-skill/${id}`)
   alert("Deleted successfully")
   navigate("/skill")
  }
  return (
    <div>
      <CandidateNavBar />

      <div className="container">
        <br></br>
        <h2>SKILL SET</h2>
        <div className="py-4">
          {userData.length > 0 ? (
            <table className="table shadow" style={{ backgroundColor: "#ADD8E6" }}>
              <thead>
                <tr style={{ backgroundColor: "#87CEEB" }} className="table-info">
                  <th scope="col">User Id</th>
                  <th scope="col">Skill Id</th>
                  <th scope="col">Skill Name</th>
                  <th scope="col">Level</th>
                  <th scope="col">Experience</th>
                  <th scope="col">Handson</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((skill, index) => (
                  <tr className="table-light" key={index}>
                    <td>{userId}</td>
                    <td>{skill.id}</td>
                    <td>{skill.name}</td>
                    <td>{skill.level}</td>
                    <td>{skill.experience}</td>
                    <td>{skill.handson}</td>
                    <td>
                      <Link className="btn btn-success mx2" to={`/upgrade-skill/${skill.id}`}>Upgrade</Link>
                      <button onClick={()=>handleDelete(skill.id)} className ="btn btn-danger mx-2">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No user data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateSkill;
