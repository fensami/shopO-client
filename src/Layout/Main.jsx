import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  );
};

export default Main;