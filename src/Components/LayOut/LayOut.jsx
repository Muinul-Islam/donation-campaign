import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";

const LayOut = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LayOut;
