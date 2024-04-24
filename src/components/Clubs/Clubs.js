import React from "react";
import CardComponent from "./Card";
import { LiaNetworkWiredSolid } from "react-icons/lia";
const Clubs = () => {
  return (
    <div>
      <div>
        <div className="mt-0 flex pb-5 items-center">
          <LiaNetworkWiredSolid className="text-2xl" />
          <p className="uppercase text-base tracking-tighter font-medium text-gray-900">
            Technical clubs
          </p>
        </div>

        <div className="">
          <CardComponent />
        </div>
      </div>
      <div>
        <div className="mt-0 flex pb-5 items-center">
          <LiaNetworkWiredSolid className="text-2xl" />
          <p className="uppercase text-base tracking-tighter font-medium text-gray-900">
            Technical clubs
          </p>
        </div>

        <div className="">
          <CardComponent />
        </div>
      </div>
    </div>
  );
};

export default Clubs;
