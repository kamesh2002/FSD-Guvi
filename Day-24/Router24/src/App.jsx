import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import All from "./pages/All";
import FullStackDevelopment from "./pages/FullStackDevelopment";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";
import Career from "./pages/Career";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
