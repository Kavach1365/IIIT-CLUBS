import React, { useEffect, useState } from "react";
import upComingEvents from "../../utils/upComingEvents";
import EditEventForm from "./EditEventForm";
import { Link } from "react-router-dom";
import { formatDateForEvents } from "../../utils/formatDateForEvents";
// import completedEvents from "../../utils/completedEvents";
// import { Link } from "react-router-dom";
const EditEvents = () => {
  const [upcomingEventsList, setUpcomingEventsList] = useState([]);
  const [editEvent, setEditEvent] = useState(null);

  const setNull = () => {
    setEditEvent(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const upcomingEventsData = await upComingEvents();
      setUpcomingEventsList(upcomingEventsData);
    };
    fetchData();
  }, [editEvent]);

  return (
    <>
      <div>
        <h1 className="text-lg pb-4">Upcoming Events</h1>
        <div className="flex flex-wrap pb-8">
          {upcomingEventsList.map((event) => (
            <div
              to={`/events/${event._id}`}
              className="w-60 rounded-xl shadow-xl cursor-pointer m-1 mb-2"
              key={event._id}
            >
              <div className="h-92">
                <Link to={`/events/${event._id}`}>
                  <div className="h-60">
                    <img
                      src={event.imgUrl}
                      alt={event.clubName}
                      className="w-full h-full rounded-t-xl"
                    />
                  </div>
                </Link>
                <div className="flex flex-col justify-center h-36 pl-6 ">
                  <Link to={`/events/${event._id}`}>
                    <h2>{event.eventName}</h2>
                    <p>{formatDateForEvents(new Date(event.startDate))}</p>
                  </Link>
                  <button
                    onClick={() => setEditEvent(event)}
                    className="mr-auto cursor-pointer text-white font-semibold mt-2 p-1 pl-6 pr-6 bg-[#3B71CA] rounded"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {editEvent !== null && (
        <div className="p-4 overflow-y-scroll fixed top-0 left-0 right-0 w-full h-full bg-[#00000090] flex flex-row justify-center backdrop-opacity-10">
          <EditEventForm setNull={setNull} event={editEvent} />
        </div>
      )}
    </>
  );
};

export default EditEvents;
