import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GrGallery } from "react-icons/gr";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaBug } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const name = useLocation();
  console.log(name.pathname);

  return (
    <div className="max-h-screen pr-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwFN7MZ4YmxE2NbnsMKaXG-I0VgtMyFdpwc8Cr5PLa0EwC7dZiaktR0kGfzKktfiexg&usqp=CAU"
        alt="ClubCouncilLogo"
        className="w-20 bg-black rounded-full"
      />
      <div className="mt-10">
        <div className="mb-6">
          <NavLink to="/" className="nav-item">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10  cursor-pointer">
              <GoHome className=" text-gray-500 mr-4" />
              <p className="text-gray-500 title">Home</p>
            </div>
          </NavLink>
          <NavLink to="/clubs" className="nav-item">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10  cursor-pointer">
              <FaRegCompass className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Clubs</p>
            </div>
          </NavLink>
          <NavLink to="/events" className="nav-item">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10  cursor-pointer">
              <FaTicketAlt className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Events</p>
            </div>
          </NavLink>
          <NavLink to="/calender" className="nav-item">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10  cursor-pointer">
              <SlCalender className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Calender</p>
            </div>
          </NavLink>
          <NavLink to="/gallery" className="nav-item">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10  cursor-pointer">
              <GrGallery className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Gallery</p>
            </div>
          </NavLink>
        </div>
        <div className="mb-4">
          <h1 className="font-semibold text-sm pl-6 mb-2">ABOUT</h1>
          <NavLink to="/about/club-council" className="nav-item">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10  cursor-pointer">
              <GoHome className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Club Council</p>
            </div>
          </NavLink>
          <NavLink to="/about/supervisory-bodies" className="nav-item">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10  cursor-pointer">
              <IoIosInformationCircleOutline className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Supervisory Bodies</p>
            </div>
          </NavLink>
        </div>
        <div className="mb-4">
          <h1 className="font-semibold text-sm pl-6 mb-2">HELP</h1>
          <NavLink to="/bug-report" className="nav-item">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer">
              <FaBug className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Report Bugs & Features</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
