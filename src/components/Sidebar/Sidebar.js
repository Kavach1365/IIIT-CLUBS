import React from "react";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GrGallery } from "react-icons/gr";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaBug } from "react-icons/fa";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

const Sidebar = () => {
  // const name = useLocation();
  // console.log(name.pathname);
  // const [activeTabID, changeActiveTabId] = useState(name.pathname);

  // const onChangeActiveTabId = (value) => changeActiveTabId(value);

  return (
    <div className="max-h-screen pr-2 ">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwFN7MZ4YmxE2NbnsMKaXG-I0VgtMyFdpwc8Cr5PLa0EwC7dZiaktR0kGfzKktfiexg&usqp=CAU"
        alt="ClubCouncilLogo"
        className="w-20 bg-black rounded-full"
      />
      <div className="mt-10">
        <div className="mb-6">
          <NavLink
            to="/"
            // onClick={() => onChangeActiveTabId("/")}
            className={({ isActive }) =>
              isActive
                ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
            }
          >
            <GoHome className=" text-gray-500 mr-4" />
            <p className="text-gray-500 ">Home</p>
          </NavLink>
          <NavLink
            to="/clubs"
            // onClick={() => onChangeActiveTabId("/clubs")}
            className={({ isActive }) =>
              isActive
                ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
            }
          >
            <FaRegCompass className=" text-gray-500 mr-4" />
            <p className="text-gray-500 ">Clubs</p>
          </NavLink>
          <NavLink
            to="/events"
            // onClick={() => onChangeActiveTabId("/events")}
            className={({ isActive }) =>
              isActive
                ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
            }
          >
            <FaTicketAlt className=" text-gray-500 mr-4" />
            <p className="text-gray-500 ">Events</p>
          </NavLink>
          <NavLink
            to="/calender"
            // onClick={() => onChangeActiveTabId("/calender")}
            className={({ isActive }) =>
              isActive
                ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
            }
          >
            <SlCalender className=" text-gray-500 mr-4" />
            <p className="text-gray-500 ">Calender</p>
          </NavLink>
          <NavLink
            to="/gallery"
            // onClick={() => onChangeActiveTabId("/gallery")}
            className={({ isActive }) =>
              isActive
                ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
            }
          >
            <GrGallery className=" text-gray-500 mr-4" />
            <p className="text-gray-500 ">Gallery</p>
          </NavLink>
        </div>
        <div className="mb-4">
          <h1 className="font-semibold text-sm pl-6 mb-2">ABOUT</h1>
          <NavLink
            to="/about/club-council"
            // onClick={() => onChangeActiveTabId("/about/club-council")}
            className={({ isActive }) =>
              isActive
                ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
            }
          >
            <GoHome className=" text-gray-500 mr-4" />
            <p className="text-gray-500 ">Club Council</p>
          </NavLink>
          <NavLink
            to="/about/supervisory-bodies"
            // onClick={() => onChangeActiveTabId("/about/supervisory-bodies")}
            className={({ isActive }) =>
              isActive
                ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
            }
          >
            <IoIosInformationCircleOutline className=" text-gray-500 mr-4" />
            <p className="text-gray-500 ">Supervisory Bodies</p>
          </NavLink>
        </div>
        <div className="mb-4">
          <h1 className="font-semibold text-sm pl-6 mb-2">HELP</h1>
          <NavLink
            to="/bug-report"
            // onClick={() => onChangeActiveTabId("/bug-report")}
            className={({ isActive }) =>
              isActive
                ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
            }
          >
            <FaBug className=" text-gray-500 mr-4" />
            <p className="text-gray-500 ">Report Bugs & Features</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
