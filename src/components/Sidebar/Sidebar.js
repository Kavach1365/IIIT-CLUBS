import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GrGallery } from "react-icons/gr";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaBug } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const name = useLocation();
  console.log(name.pathname);
  const [activeTabID, changeActiveTabId] = useState(name.pathname);

  const onChangeActiveTabId = (value) => changeActiveTabId(value);

  return (
    <div className="max-h-screen pr-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwFN7MZ4YmxE2NbnsMKaXG-I0VgtMyFdpwc8Cr5PLa0EwC7dZiaktR0kGfzKktfiexg&usqp=CAU"
        alt="ClubCouncilLogo"
        className="w-20 bg-black rounded-full"
      />
      <div className="mt-10">
        <div className="mb-6">
          <Link to="/" onClick={() => onChangeActiveTabId("/")}>
            <div
              className={
                activeTabID === "/"
                  ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                  : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
              }
            >
              <GoHome className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Home</p>
            </div>
          </Link>
          <Link to="/clubs" onClick={() => onChangeActiveTabId("/clubs")}>
            <div
              className={
                activeTabID === "/clubs"
                  ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                  : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
              }
            >
              <FaRegCompass className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Clubs</p>
            </div>
          </Link>
          <Link to="/events" onClick={() => onChangeActiveTabId("/events")}>
            <div
              className={
                activeTabID === "/events"
                  ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                  : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
              }
            >
              <FaTicketAlt className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Events</p>
            </div>
          </Link>
          <Link to="/calender" onClick={() => onChangeActiveTabId("/calender")}>
            <div
              className={
                activeTabID === "/calender"
                  ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                  : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
              }
            >
              <SlCalender className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Calender</p>
            </div>
          </Link>
          <Link to="/gallery" onClick={() => onChangeActiveTabId("/gallery")}>
            <div
              className={
                activeTabID === "/gallery"
                  ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                  : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
              }
            >
              <GrGallery className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Gallery</p>
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <h1 className="font-semibold text-sm pl-6 mb-2">ABOUT</h1>
          <Link
            to="/about/club-council"
            onClick={() => onChangeActiveTabId("/about/club-council")}
          >
            <div
              className={
                activeTabID === "/about/club-council"
                  ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                  : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
              }
            >
              <GoHome className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Club Council</p>
            </div>
          </Link>
          <Link
            to="/about/supervisory-bodies"
            onClick={() => onChangeActiveTabId("/about/supervisory-bodies")}
          >
            <div
              className={
                activeTabID === "/about/supervisory-bodies"
                  ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                  : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
              }
            >
              <IoIosInformationCircleOutline className=" text-gray-500 mr-4" />
              <p className="text-gray-500 ">Supervisory Bodies</p>
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <h1 className="font-semibold text-sm pl-6 mb-2">HELP</h1>
          <Link
            to="/bug-report"
            onClick={() => onChangeActiveTabId("/bug-report")}
          >
            <div
              className={
                activeTabID === "/bug-report"
                  ? `bg-blue-100 rounded-md flex items-center mb-2  h-10 pl-6 cursor-pointer`
                  : `flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer`
              }
            >
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
