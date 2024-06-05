import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import allEvents from "../../utils/allEvents";
import "./NoticeBoard.css";

const Notice = ({ notice, onClickEvent, setOnClickEvent }) => {
  const { clubName, startDate, eventName, _id, description } = notice;

  const toggleDescription = () => {
    if (onClickEvent === _id) {
      setOnClickEvent("");
    } else {
      setOnClickEvent(_id);
    }
  };

  return (
    <div className="notice-card-container">
      <div className="notice-card">
        <div className="notice-card-header-section">
          <h2>{startDate}</h2>
          <h2>{clubName}</h2>
          <h2>{eventName}</h2>
        </div>
        <div>
          <button
            className="show-description-button"
            onClick={toggleDescription}
          >
            {onClickEvent === _id ? "➖" : "➕"}
          </button>
        </div>
      </div>
      {_id === onClickEvent && (
        <div className="description">
          <p>{description}</p>
          <Link to={`/events/${_id}`} className="view-link">
            View Event{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [onClickEvent, setOnClickEvent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upComingEventsList = await allEvents();
        setNotices(upComingEventsList);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="notice-board-container">
      <h1 className="board-heading">Notices</h1>
      {notices.map((eachNotice) => (
        <Notice
          key={eachNotice._id}
          notice={eachNotice}
          onClickEvent={onClickEvent}
          setOnClickEvent={setOnClickEvent}
        />
      ))}
    </div>
  );
};

export default NoticeBoard;
