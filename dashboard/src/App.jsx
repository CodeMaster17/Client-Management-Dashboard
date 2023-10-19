
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MemberDashboard from "./Pages/Home/Member-Dashboard/MemberDashboard";
import AddUser from "./Pages/Add-User/Add-User";
import Profile from "./Pages/Profile/Profile";
import PlacesDashboard from "./Pages/Places/Places-Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<MemberDashboard />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/view-place-data" element={<PlacesDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
