import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./candidate/Register";
import Login from "./candidate/Login";
import RecruiterRegister from "./recruiter/RecruiterRegister";
import RecruiterLogin from "./recruiter/RecruiterLogin";
import CandidateDashboard from "./candidate/CandidateDashboard";
import RecruiterDashboard from "./recruiter/RecruiterDashboard";
import AddProfile from "./candidate/AddProfile";
import Skill from "./candidate/Skill";
import AddSkill from "./candidate/AddSkill";
import UpdateSkill from "./candidate/UpdateSkill";
import GetUserId from "./candidate/GetUserId";
import UpgradeSkill from "./candidate/UpgradeSkill";
import AddJob from "./recruiter/AddJob";
import AppliedJobs from "./candidate/AppliedJobs";
import ViewParticularApplication from "./candidate/ViewParticularApplication";
import ViewApplicants from "./recruiter/ViewApplicants";
import ViewSkill from "./recruiter/ViewSkill";
import ViewProfile from "./recruiter/ViewProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/recruiter-register"
            element={<RecruiterRegister />}
          />
          <Route exact path="/recruiter-login" element={<RecruiterLogin />} />
          <Route
            exact
            path="/candidate-dashboard"
            element={<CandidateDashboard />}
          />
          <Route
            exact
            path="/recruiter-dashboard"
            element={<RecruiterDashboard />}
          />
          <Route exact path="/add-profile" element={<AddProfile />} />
          <Route exact path="/skill" element={<Skill />} />
          <Route exact path="/add-skill" element={<AddSkill />} />
          <Route exact path="/update-skill" element={<UpdateSkill />} />
          <Route exact path="/GetUserId" element={<GetUserId />} />
          <Route exact path="/upgrade-skill/:id" element={<UpgradeSkill />} />
          <Route exact path="/add-job" element={<AddJob />} />
          <Route exact path="/view-applied-jobs" element={<AppliedJobs />} />
          <Route
            exact
            path="/view-particular-application"
            element={<ViewParticularApplication />}
          />
          <Route exact path="/view-applicants" element={<ViewApplicants/>}/>
          <Route exact path="/view-candidate-skill" element={<ViewSkill/>}/>
          <Route exact path="/view-candidate-profile" element={<ViewProfile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
