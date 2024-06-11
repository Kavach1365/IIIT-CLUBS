import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddClubMember.css";
import { FaFile } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";

const AddClubMember = () => {
  const { id } = useParams(); // Get the club ID from the URL
  const [memberId, setMemberId] = useState("");
  const [name, setName] = useState("");
  const [clubName, setClubName] = useState("");
  const [branch, setBranch] = useState("");
  const [position, setPosition] = useState("");
  const [isClubAdmin, setIsClubAdmin] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch club details when the component mounts
    const fetchClubDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8005/clubProfile?clubId=${id}`);
        const clubData = response.data[0];
        setClubName(clubData.clubName);
      } catch (error) {
        console.error("Error fetching club details:", error);
      }
    };
    fetchClubDetails();
  }, [id]);

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
      setImageUrl(res.data.secure_url);
      setIsUploading(false);
    } catch (err) {
      console.error("Error uploading image:", err);
      setIsUploading(false);
      setErrorMessage("Error uploading image. Please try again.");
    }
  };

  const addMember = async (e) => {
    e.preventDefault();

    if (!memberId || !name || !clubName || !branch || !position || !imageUrl) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setErrorMessage(""); // Clear any previous error messages

    try {
      const memberData = {
        memberId,
        name,
        clubName,
        imageUrl,
        branch,
        position,
        isClubAdmin,
      };
      const res = await axios.post(`http://localhost:8005/add-club-member/${id}`, memberData);
      console.log(res);

      // Reset form fields after successful submission
      setMemberId("");
      setName("");
      setBranch("");
      setPosition("");
      setImageUrl("");
      setIsClubAdmin(false);
    } catch (error) {
      console.error("Error adding member:", error);
      setErrorMessage("Error adding member. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="add-event-title">Add Member to {clubName}</h1>
      <form className="form-comp" onSubmit={addMember}>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            placeholder="Enter the ID number B19XXXX"
            onChange={(e) => setMemberId(e.target.value)}
            value={memberId}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <input
            type="text"
            id="branch"
            placeholder="Enter Branch"
            onChange={(e) => setBranch(e.target.value)}
            value={branch}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Member Position</label>
          <input
            type="text"
            id="position"
            placeholder="Enter the position of the member"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isClubAdmin">Is Admin? </label>
          <input
            type="checkbox"
            id="isClubAdmin"
            checked={isClubAdmin}
            name="isClubAdmin"
            onChange={(e) => setIsClubAdmin(e.target.checked)}
          />
        </div>

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
          {imageUrl && (
            <img className="preview-image" src={imageUrl} alt="Club Member" />
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

export default AddClubMember;
