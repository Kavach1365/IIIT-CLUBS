import React, { useState } from "react";
import getUserInfo from "../../authentication/utils/userInfo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = getUserInfo();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload()
  };

  return (
    <div className="p-0 relative">
      {user ? (
        <div className="relative">
          <img
            src={
              user.profileImg ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
            alt="ProfileImage"
            className="rounded-full w-12 cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-10">
              <a
                href="/my-profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                My Profile
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <a href="/login">
          <button className="login-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </a>
      )}
    </div>
  );
};

export default Header;


//const [isOpen, setIsOpen] = useState(false);

// const toggleDropdown = () => {
//   setIsOpen(!isOpen);
// };
// {isOpen && (
//   <div className="mt-2 flex flex-col items-center absolute">
//     <button className="px-3 py-1 rounded-lg bg-blue-50">Login</button>
//   </div>
// )}
