import { useState } from "react";
import axios from "axios";
import "./AddClubMember.css";
import { FaFile } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

const AddClubMember = () => {
  const [memberId, setId] = useState("");
  const [name, setName] = useState("");
  const [clubName, setClubName] = useState("");
  const [branch, setBranch] = useState("");
  const [position, setPosition] = useState("");

  // State for holding the uploaded image URL
  const [imageUrl, setImageUrl] = useState("");
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
      setImageUrl(res.data.secure_url);
      // imgUrl = res.data.secure_url;
      setIsUploading(false);
    } catch (err) {
      console.error("Error uploading image:", err);
      setIsUploading(false);
    }
  };

  const addMember = async (e) => {
    e.preventDefault();

    if (
      memberId === "" ||
      name === "" ||
      clubName === "" ||
      branch === "" ||
      position === "" ||
      imageUrl === ""
    ) {
      setErrorMessage(true);
      return;
    }
    const memberData = {
      memberId: memberId,
      name: name,
      clubName: clubName,
      imageUrl: imageUrl,
      branch: branch,
      position: position,
    };
    setErrorMessage(false);
    try {
      const res = await axios.post(
        "http://localhost:8005/add-club-member",
        memberData
      );
      console.log(res);
      // Reset form fields after successful submission
    } catch (e) {
      console.error("Error adding event:", e);
    }

    setId("");
    setName("");
    setClubName("");
    setBranch("");
    setImageUrl("");
    setPosition("");
  };

  return (
    <div>
      <h1 className="add-event-title">Add Event</h1>
      <form className="form-comp" onSubmit={addMember}>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            placeholder="Enter the ID number B19XXXX"
            onChange={(e) => setId(e.target.value)}
            value={memberId}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter the name of the member..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
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
          <label htmlFor="branch">Branch</label>
          <input
            type="text"
            id="branch"
            placeholder="Enter the venue.."
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
