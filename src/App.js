import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./layouts/Header/NavigationBar";
import FooterBar from "./layouts/Footer/FooterBar";
import Home from "./pages/Home";
import FindJob from "./pages/FindJob";
import FindDev from "./pages/FindDev";
import Signup from "./components/forms/authForms/SignupFrom";
import Login from "./components/forms/authForms/Login";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <NavigationBar />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dev" element={<FindDev />} />
            <Route path="/jobs" element={<FindJob />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
        <FooterBar />
      </div>
    </>
  );
};

export default App;
