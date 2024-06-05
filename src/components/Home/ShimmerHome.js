import React from "react";

const ShimmerHome = () => {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className="w-60 rounded-xl shadow-xl hover:scale-95 cursor-pointer m-1 mb-2"
        >
          <div className="h-92">
            <div className="h-60 bg-gray-300"></div>
            <div className="flex flex-col justify-center h-32 pl-6">
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerHome;
