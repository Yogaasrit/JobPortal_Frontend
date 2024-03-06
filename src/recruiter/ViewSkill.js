import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom';
import RecruiterNavBar from '../layout/RecruiterNavBar';

const ViewSkill = () => {
  const location = useLocation();

  const userId = location.state.userId;
  console.log(userId);

  const [userData, setUserData] = useState([]);

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
  return (
    <div>
      <RecruiterNavBar/>
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
  )
}

export default ViewSkill