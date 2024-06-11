import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaFile, FaSpinner } from "react-icons/fa";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    clubName: "",
    eventName: "",
    imgUrl: "",
    startDate: "",
    endDate: "",
    venue: "",
    eligibility: "",
    description: "",
  });
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`/all-events/${id}`);
        setEventData(response.data[0]);
      } catch (error) {
        console.error("Error fetching event data", error);
      }
    };
    fetchEventData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    const cloud_name = "di5wkmz5l";
    const preset_key = "mdlylruh";

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", preset_key);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      );
      setEventData((prevData) => ({
        ...prevData,
        imgUrl: res.data.secure_url,
      }));
      setIsUploading(false);
    } catch (err) {
      console.error("Error uploading image:", err);
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/edit-event/${id}`, eventData);
      alert("Event updated successfully");
      navigate(`/events`);
    } catch (error) {
      console.error("Error updating event data", error);
      alert("Failed to update event");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Club Name</label>
          <input
            type="text"
            name="clubName"
            value={eventData.clubName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500 cursor-not-allowed"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        {!isUploading && (
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <div className="input-file">
              <label className="file-input-label" htmlFor="file">
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
          </div>
        )}
        {isUploading && (
          <div className="mb-4">
            <label className="block text-gray-700">Uploading File</label>
            <div className="upload-spinner">
              <FaSpinner className="spinner-icon" />
            </div>
          </div>
        )}
        <div className="preview-image-div mb-4">
          {eventData.imgUrl && (
            <img className="preview-image" src={eventData.imgUrl} alt="Event" />
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Date</label>
          <input
            type="datetime-local"
            name="startDate"
            value={eventData.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Date</label>
          <input
            type="datetime-local"
            name="endDate"
            value={eventData.endDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Venue</label>
          <input
            type="text"
            name="venue"
            value={eventData.venue}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Eligibility</label>
          <input
            type="text"
            name="eligibility"
            value={eventData.eligibility}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
