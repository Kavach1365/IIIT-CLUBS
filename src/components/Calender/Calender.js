import React, { useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 04790cb7b48e5f687fcdc20430c629888fcf484b
// import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./eventutils";

<<<<<<< HEAD
export default function Calendar() {
  // const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(INITIAL_EVENTS);
  const navigate = useNavigate();
=======
const Calendar = () => {
  // const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(INITIAL_EVENTS);

>>>>>>> 04790cb7b48e5f687fcdc20430c629888fcf484b
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
<<<<<<< HEAD
    console.log(clickInfo.event["_def"].publicId);
    navigate("/");
=======
    if (
      alert(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
>>>>>>> 04790cb7b48e5f687fcdc20430c629888fcf484b
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

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
          weekends={true}
          initialEvents={currentEvents} // alternatively, use the `events` setting to fetch from a feed
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
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b styles={{ color: "green" }}>{eventInfo.timeText}</b>
      <b>{eventInfo.event.title}</b>
    </>
  );
}
<<<<<<< HEAD
=======

export default Calendar;
>>>>>>> 04790cb7b48e5f687fcdc20430c629888fcf484b
