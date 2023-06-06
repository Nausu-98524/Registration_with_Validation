import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegistrationPage from "./component/RegistrationPage";
import ShowData from "./component/ShowData";
import ShowAllData from "./component/ShowAllData";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/display" element={<ShowData />} />
          <Route path="/showdata" element={<ShowAllData />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
