import React from "react";
import { GoHome } from "react-icons/go";
const Sidebar = () => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwFN7MZ4YmxE2NbnsMKaXG-I0VgtMyFdpwc8Cr5PLa0EwC7dZiaktR0kGfzKktfiexg&usqp=CAU"
        alt="ClubCouncilLogo"
        className="w-20 bg-black rounded-full"
      />
      <div className="mt-10">
        <div>
          <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
            <GoHome className=" text-gray-500 mr-6" />
            <p className="text-gray-500 ">Home</p>
          </div>
          <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
            <GoHome className=" text-gray-500 mr-6" />
            <p className="text-gray-500 ">Clubs</p>
          </div>
          <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
            <GoHome className=" text-gray-500 mr-6" />
            <p className="text-gray-500 ">Student Bodies</p>
          </div>
          <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
            <GoHome className=" text-gray-500 mr-6" />
            <p className="text-gray-500 ">Events</p>
          </div>
          <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
            <GoHome className=" text-gray-500 mr-6" />
            <p className="text-gray-500 ">Calender</p>
          </div>
          <div className="flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 pl-6 cursor-pointer">
            <GoHome className=" text-gray-500 mr-6" />
            <p className="text-gray-500 ">Gallery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
