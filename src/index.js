import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client"; // Correct import statement
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Clubs from "./components/Clubs/Clubs";
import Events from "./components/Events/Events";
import Calender from "./components/Calender/Calender";
import Gallery from "./components/Gallery/Gallery";
import ClubCouncil from "./components/ClubCouncil/ClubCouncil";
import SupervisoryBodies from "./components/SupervisoryBodies/SupervisoryBodies";
import BugReport from "./components/BugReport/BugReport";
import Event from "./components/Event/Event";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/clubs",
        element: <Clubs />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about/club-council",
        element: <ClubCouncil />,
      },
      {
        path: "/about/supervisory-bodies",
        element: <SupervisoryBodies />,
      },
      {
        path: "/bug-report",
        element: <BugReport />,
      },
      {
        path: "/events/:id",
        element: <Event />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
