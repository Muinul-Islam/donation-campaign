import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/LayOut/LayOut";
import Home from "../Components/Home/Home";
import Donation from "../Components/Donation/Donation";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
    ],
  },
]);

export default Route;
