import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";

const LayOut = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LayOut;
