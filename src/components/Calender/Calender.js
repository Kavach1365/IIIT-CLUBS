import React, { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import { INITIAL_EVENTS } from "./eventutils";
import allEvents from "../../utils/allEvents";
// import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick(clickInfo) {
    // const eventId = clickInfo.event._def.publicId;
    // const eventUrl = `/events/${eventId}`;
    // useNavigate(eventUrl);
  }
  // console.log(allEventsList);
  return (
    <div className="demo-app">
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
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
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
