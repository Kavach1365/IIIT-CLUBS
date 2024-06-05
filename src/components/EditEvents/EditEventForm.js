import { useState } from "react";
import axios from "axios";
import "./EditEventForm.css";
import { FaFile } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

const EditEventForm = (props) => {
  const { event, setNull } = props;
  // console.log(event);

  function formatDateToLocalISOString(date) {
    const pad = (number) => (number < 10 ? "0" : "") + number;

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // Months are zero-based
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  // Example usage
  // const d = new Date("0015-04-25T12:00:00+05:30");
  // const formattedDate = formatDateToLocalISOString(d);

  // console.log(formattedDate);

  // let eventStartDate = new Date(event.startDate);
  // console.log(eventStartDate.getUTCDate());

  const [clubName, setClubName] = useState(event.clubName);
  const [eventName, setEventName] = useState(event.eventName);
  const [startDate, setStartDate] = useState(
    formatDateToLocalISOString(new Date(event.startDate))
  );
  const [endDate, setEndDate] = useState(
    formatDateToLocalISOString(new Date(event.endDate))
  );
  const [venue, setVenue] = useState(event.venue);
  const [eligibility, setEligibility] = useState(event.eligibility.join(","));
  const [description, setDescription] = useState(event.description);

  // State for holding the uploaded image URL
  const [addEventImage, setAddEventImage] = useState(event.imgUrl);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    const cloud_name = "di5wkmz5l";
    const preset_key = "mdlylruh";

    // Upload image to Cloudinary
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", preset_key);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      );
      setAddEventImage(res.data.secure_url);
      // imgUrl = res.data.secure_url;
      setIsUploading(false);
    } catch (err) {
      console.error("Error uploading image:", err);
      setIsUploading(false);
    }
  };

  const editEventsData = async (e) => {
    e.preventDefault();

    if (
      clubName === "" ||
      eventName === "" ||
      addEventImage === "" ||
      startDate === "" ||
      endDate === "" ||
      venue === "" ||
      eligibility === "" ||
      description === ""
    ) {
      setErrorMessage(true);
      return;
    }

    const eventData = {
      clubName: clubName,
      eventName: eventName,
      imgUrl: addEventImage,
      startDate: startDate + ":00+05:30",
      endDate: endDate + ":00+05:30",
      venue: venue,
      eligibility: eligibility.split(","),
      description: description,
    };
    setErrorMessage(false);
    try {
      const url = `http://localhost:8005/edit-event/${event._id}`;
      await axios.put(url, eventData);
      // console.log(url, eventData);
      // Reset form fields after successful submission
      // console.log(res);

      setNull(null);
    } catch (e) {
      console.error("Error adding event:", e);
    }

    // imgUrl = "";
  };

  return (
    <div className="form-bg scale-in-center">
      <p className="close-cont">
        <span
          onClick={() => {
            setNull();
          }}
          className="close"
        >
          close
        </span>
      </p>
      <h1 className="add-event-title">Edit Event</h1>
      <form className="form-comp" onSubmit={editEventsData}>
        <div className="form-group">
          <label htmlFor="clubName">Club Name</label>
          <input
            type="text"
            id="clubName"
            placeholder="Enter the club name.."
            onChange={(e) => setClubName(e.target.value)}
            value={clubName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            placeholder="Enter the event name.."
            onChange={(e) => setEventName(e.target.value)}
            value={eventName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="datetime-local"
            id="startDate"
            placeholder="Enter the start date.."
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="datetime-local"
            id="endDate"
            placeholder="Enter the end date.."
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            id="venue"
            placeholder="Enter the venue.."
            onChange={(e) => setVenue(e.target.value)}
            value={venue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eligibility">Eligibility</label>
          <input
            type="text"
            id="eligibility"
            placeholder="Enter the eligibility like (P1,P2,E1..).."
            onChange={(e) => setEligibility(e.target.value)}
            value={eligibility}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Event Description</label>
          <textarea
            id="description"
            placeholder="Enter the event description.."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        {/* changed */}

        {!isUploading && (
          <div className="form-group input-file">
            <label className={`file-input-label`} htmlFor="file">
              Upload File
            </label>
            <FaFile />
            <input
              className="file-input"
              type="file"
              id="file"
              onChange={uploadImage}
            />
          </div>
        )}
        {isUploading && (
          <div className="form-group input-file image-added">
            <label htmlFor="file">Uploading File</label>
            <div className="upload-spinner">
              <FaSpinner className="spinner-icon" />
            </div>
          </div>
        )}

        <div className="preview-image-div  form-group">
          {addEventImage && (
            <img className="preview-image" src={addEventImage} alt="" />
          )}
        </div>

        <button className="add-event-button" type="submit">
          Submit
        </button>
        {errorMessage && <p>Please enter the data!</p>}
      </form>
    </div>
  );
};

export default EditEventForm;
