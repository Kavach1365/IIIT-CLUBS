import React, { useEffect, useState } from "react";
// import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import { INITIAL_EVENTS } from "./eventutils";
import allEvents from "../../utils/allEvents";
// import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const [allEventsList, setAllEventsList] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const allEventsData = await allEvents();
      // console.log(allEventsData);
      const formattedEventsData = allEventsData.map((event) => ({
        id: event._id,
        title: event.eventName,
        start: event.startDate,
        end: event.endDate,
      }));
      // console.log(formattedEventsData);
      setAllEventsList(formattedEventsData);
      setIsFetched(true);
    };
    fetchData();
  }, []);
  function handleEventClick(clickInfo) {
    // const eventId = clickInfo.event._def.publicId;
    // const eventUrl = `/events/${eventId}`;
    // useNavigate(eventUrl);
  }
  // console.log(allEventsList);
  return (
    <div className="demo-app">
      {isFetched && (
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "title",
              right: "today prev,next",
              center: "",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            initialEvents={allEventsList} // alternatively, use the `events` setting to fetch from a feed
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            /*eventsSet={allEventsList} // called after events are initialized/added/changed/removed
          you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
          />
        </div>
      )}
    </div>
  );
};

function renderEventContent(eventInfo) {
  const eventId = eventInfo.event._def.publicId;
  console.log(eventInfo.event);
  const classNames = [
    "bg-purple-900",
    "bg-fuchsia-600",
    "bg-rose-950",
    "bg-blue-700",
    "bg-sky-800",
    "bg-cyan-600",
    "bg-teal-950",
    "bg-emerald-700",
    "bg-yellow-700",
    "bg-red-600",
    "bg-stone-900",
    "bg-neutral-700",
  ];
  let len = classNames.length;
  let n = Math.floor(Math.random() * len);
  return (
    <a
      href={`/events/${eventId}`}
      className={`${classNames[n]} text-white rounded w-full`}
    >
      <b className="text-white pr-1 pl-1">{eventInfo.timeText}</b>
      <b>{eventInfo.event.title}</b>
    </a>
  );
}

export default Calendar;
