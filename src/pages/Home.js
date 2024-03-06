import React from "react";
import NavBar from "../layout/NavBar";

const Home = () => {
  const containerStyle = {
    height: "80vh", // 80% of the viewport height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ADD8E6", // light pale blue color
  };

  const remainingAreaStyle = {
    height: "20vh", // 20% of the viewport height
    backgroundColor: "#f0f8ff", // remaining area color
  };

  return (
    <div>
      <NavBar />
      <div style={containerStyle}>
        <div style={{ textAlign: "center" }}>
          <h1> 💻 WELCOME TO YOVKRI 🔍</h1>
          <h4>India's No 1 Job searching portal!</h4>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlvIRehlUSaYY67-YLprJvD0dc74ubjfCywEOQ2a6llgXg2sNl3Kciz1GVWzUWRMekQU&usqp=CAU"
            alt="Job Portal"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
      <div style={remainingAreaStyle}></div>
    </div>
  );
};

export default Home;
