import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecruiterNavBar from '../layout/RecruiterNavBar';
import { useLocation } from 'react-router-dom';

const ViewProfile = () => {
  const [profileData, setProfileData] = useState(null);

  const location = useLocation();
  const userId = location.state.userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/view-profile/${userId}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RecruiterNavBar />
      <div className="card" style={{ border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div className="card-body">
          <h5 className="card-title">Profile</h5>
          <p className="card-text"><strong>User ID:</strong> {profileData.userid}</p>
          <p className="card-text"><strong>Date of Birth:</strong> {new Date(profileData.dob).toDateString()}</p>
          <p className="card-text"><strong>Address:</strong> {profileData.address}</p>
          <p className="card-text"><strong>Phone:</strong> {profileData.phone}</p>
          <p className="card-text"><strong>Degree:</strong> {profileData.degree}</p>
          <p className="card-text"><strong>University:</strong> {profileData.university}</p>
          <p className="card-text"><strong>CGPA:</strong> {profileData.cgpa}</p>
          <p className="card-text"><strong>Year of Passing:</strong> {profileData.yearofpassing}</p>
          <p className="card-text"><strong>Interested Field:</strong> {profileData.interestedfield}</p>
          <p className="card-text"><strong>Interested Company:</strong> {profileData.interestedcompany}</p>
          <p className="card-text"><strong>Certification:</strong> {profileData.certification}</p>
          <p className="card-text"><strong>Experience:</strong> {profileData.experience} years</p>
          <p className="card-text"><strong>Languages Known:</strong> {profileData.languagesknown}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
