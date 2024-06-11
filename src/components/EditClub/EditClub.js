import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditClub = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [clubData, setClubData] = useState({
    clubName: "",
    tagLine: "",
    description: "",
    category: "",
    instagramUrl: "",
    twitterUrl: "",
    youtubeUrl: "",
    mailId: "",
    clubImage: "",
    clubBanner: ""
  });

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await axios.get(`/clubProfile?clubId=${id}`);
        setClubData(response.data[0]);
      } catch (error) {
        console.error("Error fetching club data", error);
      }
    };
    fetchClubData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/edit-club/${id}`, clubData);
      alert("Club updated successfully");
      navigate(`/club-profile/${id}`);
    } catch (error) {
      console.error("Error updating club data", error);
      alert("Failed to update club");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Club</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Club Name</label>
          <input
            type="text"
            name="clubName"
            value={clubData.clubName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tag Line</label>
          <input
            type="text"
            name="tagLine"
            value={clubData.tagLine}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={clubData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={clubData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Instagram URL</label>
          <input
            type="text"
            name="instagramUrl"
            value={clubData.instagramUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Twitter URL</label>
          <input
            type="text"
            name="twitterUrl"
            value={clubData.twitterUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">YouTube URL</label>
          <input
            type="text"
            name="youtubeUrl"
            value={clubData.youtubeUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mail ID</label>
          <input
            type="email"
            name="mailId"
            value={clubData.mailId}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Club Image URL</label>
          <input
            type="text"
            name="clubImage"
            value={clubData.clubImage}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Club Banner URL</label>
          <input
            type="text"
            name="clubBanner"
            value={clubData.clubBanner}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
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

export default EditClub;
