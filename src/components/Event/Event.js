import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import specificEvent from "../../utils/specificEvent";
import { formatDateForEvents } from "../../utils/formatDateForEvents";

const Event = () => {
  const { id } = useParams();
  const [recentEventsList, setRecentEventsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await specificEvent(id);
      setRecentEventsList(data);
    };
    fetchData();
  }, [id]);
  /*Need to add shimmer Effect */

  if (recentEventsList.length === 0) {
    return <h1>No events yet!</h1>;
  }

  const {
    imgUrl,
    eventName,
    clubName,
    startDate,
    endDate,
    venue,
    eligibility,
    description,
  } = recentEventsList[0];
  console.log(imgUrl);
  return (
    <div className="flex">
      <div className="w-6/12 mr-10 ">
        <img
          src={imgUrl}
          alt={eventName}
          className="w-full rounded-xl shadow-xl shadow-gray-300"
        />
      </div>
      <div className="flex flex-col w-6/12">
        <div className="flex items-center text-gray-700">
          <SlCalender className="mr-4" />
          <p>{formatDateForEvents(new Date(startDate))}</p>
          <p className="pl-1 pr-1">{" - "}</p>
          <p>{formatDateForEvents(new Date(endDate))}</p>
        </div>
        <h1 className="text-3xl font-bold mt-3 mb-3">{eventName}</h1>
        <div className="w-2/6 mt-3 mb-3 cursor-pointer">
          <p className="p-2 border text-gray-600 rounded-lg">{clubName}</p>
        </div>
        <div className="flex items-center mt-3 mb-3">
          <IoLocationOutline className="mr-4" />
          <p>{venue}</p>
        </div>
        <div className="border-b">
          <div className="flex items-center mt-3 mb-3">
            <FaUserGroup className="mr-4" />
            <div className="flex">
              {eligibility.map((each) => (
                <div
                  key={each}
                  className="mr-2  bg-blue-200 rounded-2xl pl-4 pr-4 pt-1 pb-1"
                >
                  <p className="font-semibold">{each}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3 mb-3 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Event;
