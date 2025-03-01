import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AllComplaints from "./pages/AllComplaints";
import SingleComplaint from "./pages/SingleComplaint";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RaiseComplaint from "./pages/RaiseComplaint";
import PrivateComponent from "./components/PrivateComponent";
import AllUsers from "./pages/AllUsers";
import AllComments from "./pages/AllComments";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateComponent />}>
          <Route path="" element={<Home />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/users" element={<AllUsers />} />
          <Route path="admin/comments" element={<AllComments />} />
          <Route path="raise-complaint" element={<RaiseComplaint />} />
          <Route path="complaints" element={<AllComplaints />} />
          <Route path="complaints/:id" element={<SingleComplaint />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
};

export default App;
