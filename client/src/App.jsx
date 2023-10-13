// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Headers/Headers";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Edit from "./Pages/Edit/Edit";
import Profile from "./Pages/Profile/Profile";
import { Routes, Route } from "react-router-dom"
import Sidebar from './components/Sidebar/Sidebar';
import Signup from './Pages/SignUp/Signup';
import Visualize from './Pages/Visualize/Visualize';
import AddPlace from './Pages/AddPlace/AddPlace';
import ViewPlaces from './Pages/ViewPlaces/ViewPlaces';
import PlaceDetails from './Pages/PlaceDetails/PlaceDetails';

function App() {
  return (
    <>
      <div className='d-flex'>
        <Sidebar />
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/home' element={<Home />} />

            <Route path="/visualize" element={<Visualize />} />
            <Route path='/register' element={<Register />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/userprofile/:id' element={<Profile />} />

            <Route path="/viewplacedata" element={<ViewPlaces />} />
            <Route path="/addplace" element={<AddPlace />} />
            <Route path="/placedetails/:id" element={<PlaceDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;