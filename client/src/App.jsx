// import './App.css';
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Edit from "./Pages/Edit/Edit";
import Profile from "./Pages/Profile/Profile";
import { Routes, Route } from "react-router-dom"
import Signup from './Auth/SignUp/Signup';
import Visualize from './Pages/Visualize/Visualize';
import AddPlace from './Pages/AddPlace/AddPlace';
import ViewPlaces from './Pages/ViewPlaces/PlacesDashboard';
import PlaceDetails from './Pages/PlaceDetails/PlaceDetails';
import Login from './Auth/Login/Login';
import MemberDashboard from './Pages/Home/MemberDashboard';

function App() {
  return (
    <>
      <div className='d-flex'>
        <div>
          <Routes>
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<Home />}>
              <Route path='/' element={<MemberDashboard />} />
              <Route path='/member-dashboard' element={<MemberDashboard />} />
              <Route path="/visualize" element={<Visualize />} />
              <Route path='/register' element={<Register />} />
              <Route path='/edit/:id' element={<Edit />} />
              <Route path='/userprofile/:id' element={<Profile />} />

              <Route path="/viewplacedata" element={<ViewPlaces />} />
              <Route path="/addplace" element={<AddPlace />} />
              <Route path="/placedetails/:id" element={<PlaceDetails />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;