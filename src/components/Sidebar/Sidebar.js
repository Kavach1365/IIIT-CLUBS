import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegCompass, FaTicketAlt, FaBug } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { GrGallery } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="max-h-screen pr-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwFN7MZ4YmxE2NbnsMKaXG-I0VgtMyFdpwc8Cr5PLa0EwC7dZiaktR0kGfzKktfiexg&usqp=CAU"
        alt="ClubCouncilLogo"
        className="w-20 bg-black rounded-full"
      />
      <div className="mt-10">
        <div className="mb-6">
          <NavLink exact to="/" className="nav-item" activeClassName="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer  pl-4">
              <GoHome className="text-gray-700 mr-4" />
              <p className="text-gray-700 font-medium title nav-item-text">
                Home
              </p>
            </div>
          </NavLink>
          <NavLink to="/clubs" className="nav-item" activeClassName="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer  pl-4">
              <FaRegCompass className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">Clubs</p>
            </div>
          </NavLink>
          <NavLink to="/events" className="nav-item" activeClassName="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <FaTicketAlt className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">Events</p>
            </div>
          </NavLink>
          <NavLink to="/calender" className="nav-item" activeClassName="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <SlCalender className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">
                Calender
              </p>
            </div>
          </NavLink>
          <NavLink to="/gallery" className="nav-item" activeClassName="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <GrGallery className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">Gallery</p>
            </div>
          </NavLink>
          <NavLink
            to="/notice-board"
            className="nav-item"
            activeClassName="active"
          >
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <HiOutlineSpeakerphone className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">
                Notice Board
              </p>
            </div>
          </NavLink>
        </div>
        <div className="mb-4">
          <h1 className="font-bold text-sm pl-6 mb-2">ABOUT</h1>
          <NavLink
            to="/about/club-council"
            className="nav-item"
            activeClassName="active"
          >
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <GoHome className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">
                Club Council
              </p>
            </div>
          </NavLink>
          <NavLink
            to="/about/supervisory-bodies"
            className="nav-item"
            activeClassName="active"
          >
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <IoIosInformationCircleOutline className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">
                Supervisory Bodies
              </p>
            </div>
          </NavLink>
        </div>
        <div className="mb-4">
          <h1 className="font-bold text-sm pl-6 mb-2">HELP</h1>
          <NavLink
            to="/bug-report"
            className="nav-item"
            activeClassName="active"
          >
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <FaBug className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">
                Report Bugs & Features
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
