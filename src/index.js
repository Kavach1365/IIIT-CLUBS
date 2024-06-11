import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client"; // Correct import statement
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Clubs from "./components/Clubs/Clubs";
import Events from "./components/Events/Events";
import Calender from "./components/Calender/Calender";
// import Gallery from "./components/Gallery/Gallery";
import ClubCouncil from "./components/ClubCouncil/ClubCouncil";
import SupervisoryBodies from "./components/SupervisoryBodies/SupervisoryBodies";
import BugReport from "./components/BugReport/BugReport";
import Event from "./components/Event/Event";
import AddEvents from "./components/Events/AddEvents";
import GalleryMain from "./components/Gallery/GalleryMain";
import ClubProfile from "./components/ClubProfile/ClubProfile";
import AddClub from "./components/Clubs/AddClub";
import EditEvents from "./components/EditEvents/EditEvents";
import AddClubMember from "./components/AddClubMember/AddClubMember";
import NoticeBoard from "./components/NoticeBoard/NoticeBoard";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import { AuthProvider } from "./authentication/context/AuthContext";
import ProtectedRouteSuperAdmin from "./authentication/protectedRoutes/ProtectedRouteSuperAdmin"
import EditClub from "./components/EditClub/EditClub";
import ProtectedRouteClubAdmin from "./authentication/protectedRoutes/ProtectedRouteClubAdmin";
import ProtectedRouteEventAdmin from "./authentication/protectedRoutes/ProtectedRouteEventAdmin";
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
        element: <GalleryMain />,
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
      {
        path: "/club-profile/:id",
        element: <ClubProfile />,
      },
      {
        path:"/club-profile/:id/edit",
        element:<ProtectedRouteClubAdmin><EditClub/></ProtectedRouteClubAdmin>,
      },
      {
        path: "/add-events/:id",
        element:<ProtectedRouteClubAdmin> <AddEvents /></ProtectedRouteClubAdmin>,
      },
      {
        path: "/add-club",
        element: <ProtectedRouteSuperAdmin><AddClub /></ProtectedRouteSuperAdmin>,
      },
      {
        path: "/edit-event/:id",
        element: <ProtectedRouteEventAdmin><EditEvents /></ProtectedRouteEventAdmin>,
      },
      {
        path: "/add-club-member/:id",
        element: <ProtectedRouteClubAdmin><AddClubMember /></ProtectedRouteClubAdmin>,
      },
      {
        path: "/notice-board",
        element: <NoticeBoard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </AuthProvider>
);
