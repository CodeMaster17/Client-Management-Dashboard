import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MemberDashboard from "./Pages/Home/Member-Dashboard/MemberDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<MemberDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
