import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/LayOut/LayOut";
import Home from "../Components/Home/Home";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default Route;
