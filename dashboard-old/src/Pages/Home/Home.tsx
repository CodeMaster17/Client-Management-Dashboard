import { Outlet } from "react-router-dom";
// import "./Home.css";
import Sidebar from "../../Components/Shared/Sidebar/Sidebar";
import Header from "../../Components/Shared/Header/Header";

const Home = () => {
  return (
    <div className="w-full flex flex-row border-2">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header title={"Voyage Vista"} />
        <div className="flex w-full flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
