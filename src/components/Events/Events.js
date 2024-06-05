import React, { useEffect, useState } from "react";
import upComingEvents from "../../utils/upComingEvents";
import completedEvents from "../../utils/completedEvents";
import { Link } from "react-router-dom";
import { formatDateForEvents } from "../../utils/formatDateForEvents";

const Events = () => {
  const [upcomingEventsList, setUpcomingEventsList] = useState([]);
  const [completedEventsList, setCompletedEventsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const upcomingEventsData = await upComingEvents();
      setUpcomingEventsList(upcomingEventsData);
      const completedEventsData = await completedEvents();
      setCompletedEventsList(completedEventsData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-lg pb-4">Upcoming Events</h1>
      <div className="flex flex-wrap pb-8">
        {upcomingEventsList.map((event) => (
          <Link
            to={`/events/${event._id}`}
            className="w-60 rounded-xl shadow-xl hover:scale-105 cursor-pointer m-2 mb-2"
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
                <p>{formatDateForEvents(new Date(event.startDate))}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <h1 className="text-lg pb-4">Completed Events</h1>
      <div className="flex flex-wrap">
        {completedEventsList.map((event) => (
          <Link
            to={`/events/${event._id}`}
            className="w-60 rounded-xl shadow-xl hover:scale-105 cursor-pointer m-2 mb-2"
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
                <p>{formatDateForEvents(new Date(event.startDate))}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
