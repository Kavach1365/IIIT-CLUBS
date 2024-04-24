import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recentEvents from "../../utils/recentEvents";
import { GrTechnology } from "react-icons/gr";
import { IoMdMusicalNote } from "react-icons/io";
import { RiServiceFill } from "react-icons/ri";
import { MdGroups3 } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoMapSharp } from "react-icons/io5";
import images from "../../utils/images";
import ShimmerHome from "./ShimmerHome";

const Home = () => {
  const [recentEventsList, setRecentEventsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await recentEvents();
      setRecentEventsList(data);
    };
    fetchData();
  }, []);
  const imagesList = images();
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-4">Upcoming & Recent Events</h1>
        {recentEventsList.length === 0 ? (
          <ShimmerHome />
        ) : (
          <div className="flex flex-wrap">
            {recentEventsList.map((event) => (
              <Link
                to={`/events/${event._id}`}
                className="w-56 rounded-xl shadow-xl hover:scale-95 cursor-pointer m-1 mb-2"
                key={event._id}
              >
                <div className="h-92">
                  <div className="h-60">
                    <img
                      src={event.imgUrl}
                      alt={event.clubName}
                      className="w-full h-full rounded-t-xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center h-32 pl-6 ">
                    <h2>{event.eventName}</h2>
                    <p>{event.startDate}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="mb-3 mt-3">
        <h1 className="text-xl font-bold">Clubs @ IIIT-B</h1>
        <p className="font-medium mt-3 mb-3">
          The clubs of IIIT-B conduct various captivating events throughout the
          year. Students across all UG/PG batches engage in the events, which
          tells how lively the campus life is! There are 2 Affinity Groups & 23
          Clubs at IIITH, divided into technical and cultural categories.
        </p>
        <p className="font-medium mt-3 mb-3">
          Clubs on campus are run by students, for the students. Club activities
          help develop new hobbies and interests in students and thereby
          contributing to the all around development of the students.
        </p>
        <div className="flex mb-12">
          <div className="bg-blue-100 w-3/4 rounded-xl flex flex-col items-center justify-around mr-4 h-44">
            <div className="bg-blue-200 rounded-full p-4 mt-2">
              <GrTechnology />
            </div>
            <div className=" ">
              <h1 className="text-blue-800 font-bold text-4xl text-center pb-2">
                8
              </h1>
              <p className="text-blue-600 font-semibold">Technical Clubs</p>
            </div>
          </div>
          <div className="bg-yellow-100 w-3/4 rounded-xl flex flex-col items-center justify-around mr-4 h-44">
            <div className="bg-yellow-200 rounded-full p-4 mt-2">
              <IoMdMusicalNote />
            </div>
            <div className=" ">
              <h1 className="text-yellow-800 font-bold text-4xl text-center pb-2">
                16
              </h1>
              <p className="text-yellow-600 font-semibold">Cultural Clubs</p>
            </div>
          </div>
          <div className="bg-gray-100 w-3/4 rounded-xl flex flex-col items-center justify-around mr-4 h-44">
            <div className="bg-gray-200 rounded-full p-4 mt-2">
              <RiServiceFill />
            </div>
            <div className=" ">
              <h1 className="text-gray-800 font-bold text-4xl text-center pb-2">
                2
              </h1>
              <p className="text-gray-500 font-semibold">Service Clubs</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">Clubs Council @ IIIT-B</h1>
        <p className="font-medium mt-3 mb-3">
          The Clubs Council is the largest Student Administrative Organization
          at IIIT Hyderabad, and acts as an umbrella body of all the institute
          affiliated and associate student-led Clubs, Groups & Societies.
        </p>
        <div className="flex mb-12">
          <div className="bg-green-100 w-3/4 rounded-xl flex flex-col items-center justify-around mr-4 h-44">
            <div className="bg-green-200 rounded-full p-4 mt-2">
              <MdGroups3 />
            </div>
            <div className=" ">
              <h1 className="text-green-800 font-bold text-4xl text-center pb-2">
                23+
              </h1>
              <p className="text-green-600 font-semibold">
                Student Constituent Groups
              </p>
            </div>
          </div>
          <div className="bg-red-100 w-3/4 rounded-xl flex flex-col items-center justify-around mr-4 h-44">
            <div className="bg-red-200 rounded-full p-4 mt-2">
              <RiGraduationCapFill />
            </div>
            <div className=" ">
              <h1 className="text-red-800 font-bold text-4xl text-center pb-2">
                70+
              </h1>
              <p className="text-red-600 font-semibold">Student Coordinators</p>
            </div>
          </div>
          <div className="bg-purple-100 w-3/4 rounded-xl flex flex-col items-center justify-around mr-4 h-44">
            <div className="bg-purple-200 rounded-full p-4 mt-2">
              <IoMapSharp />
            </div>
            <div className=" ">
              <h1 className="text-purple-800 font-bold text-4xl text-center pb-2">
                350+
              </h1>
              <p className="text-purple-500 font-semibold">
                Organizing Team Members
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap relative mb-12">
        {imagesList.map((image, index) => (
          <img
            src={image}
            alt="GalleryImage"
            className=" rounded-3xl p-2 w-1/4 cursor-pointer hover:scale-105"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
