import React from "react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-0">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        alt="ProfileImage"
        className="rounded-full w-12 cursor-pointer "
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="mt-2 flex flex-col items-center">
          <button className="px-3 py-1 rounded-lg bg-blue-50">Login</button>
        </div>
      )}
    </div>
  );
};

export default Header;
