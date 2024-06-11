import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import specificEvent from "../../utils/specificEvent";
import clubProfile from "../../utils/clubProfile"; 
import { formatDateForEvents } from "../../utils/formatDateForEvents";

const Event = () => {
  const { id } = useParams();
const [recentEventsList, setRecentEventsList] = useState([]);
const [isClubAdmin, setIsClubAdmin] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await specificEvent(id);
      setRecentEventsList(data);
      if (data.length > 0) {
        const { clubName } = data[0];
        const clubData = await clubProfile({clubName:clubName});

        if (clubData && clubData.length > 0) {
          const userInfo = localStorage.getItem("userInfo");
          if (!userInfo) {
            //console.error("User is not logged in");
            return;
          }

          const user = JSON.parse(userInfo);
          if ((user.isSuperAdmin) || (clubData[0].clubAdmins && clubData[0].clubAdmins.includes(user._id))) {
            setIsClubAdmin(true);
          }
        } else {
          console.error("Club data not found");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [id]);


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
        <div className="flex align-center">
          <h1 className="text-3xl font-bold mt-3 mb-3">{eventName}</h1>
          {isClubAdmin && (
            <Link to={`/edit-event/${id}`} className="ml-auto">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Edit
              </button>
            </Link>
          )}
        </div>
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
                  className="mr-2 bg-blue-200 rounded-2xl pl-4 pr-4 pt-1 pb-1"
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
