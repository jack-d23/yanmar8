import React from "react";
import LoginPage from "./Pages/VisitorPages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./Pages/VisitorPages/AdminPage";
import VisitorForm from "./components/VisitorForm";
import Home from "./Pages/HomePage/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<Home />} />
        <Route path="/visitor">
          <Route path="admin" element={<AdminPage />} />
          <Route path="form" element={<VisitorForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
