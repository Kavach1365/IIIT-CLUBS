import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GrGallery } from "react-icons/gr";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaBug } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="max-h-screen">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwFN7MZ4YmxE2NbnsMKaXG-I0VgtMyFdpwc8Cr5PLa0EwC7dZiaktR0kGfzKktfiexg&usqp=CAU"
        alt="ClubCouncilLogo"
        className="w-20 bg-black rounded-full"
      />
      <div className="mt-10">
        <div className="mb-6">
          <Link to="/">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
              <GoHome className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Home</p>
            </div>
          </Link>
          <Link to="/clubs">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
              <FaRegCompass className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Clubs</p>
            </div>
          </Link>
          <Link to="/events">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
              <FaTicketAlt className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Events</p>
            </div>
          </Link>
          <Link to="/calender">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
              <SlCalender className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Calender</p>
            </div>
          </Link>
          <Link to="/gallery">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
              <GrGallery className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Gallery</p>
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <h1 className="font-semibold text-sm pl-6 mb-2">ABOUT</h1>
          <Link to="/about/club-council">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
              <GoHome className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Club Council</p>
            </div>
          </Link>
          <Link to="/about/supervisory-bodies">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
              <IoIosInformationCircleOutline className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Supervisory Bodies</p>
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <h1 className="font-semibold text-sm pl-6 mb-2">HELP</h1>
          <Link to="/bug-report">
            <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
              <FaBug className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Report Bugs & Features</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
