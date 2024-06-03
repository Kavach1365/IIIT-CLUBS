import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import "./galleryStyles.css";
import Spinner from "./Spinner"; // Assuming you have a Spinner component
import images from "../../utils/images";

const GalleryMain = () => {
  const preset_key = "mdlylruh";
  const cloud_name = "di5wkmz5l";
  const [imageArray, setImageArray] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading state
  useEffect(() => {
    const fetchData = async () => {
      const data = await images();
      setImageArray(data);
    };
    fetchData();
  }, [imageArray]);
  async function handleChange(event) {
    setLoading(true); // Set loading state to true when uploading starts
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      );
      const imgUrl = res.data.secure_url;
      try {
        await axios.post("http://localhost:8005/add-to-gallery", { imgUrl }); // Pass the data object
        setLoading(false);
      } catch (e) {
        console.log("Error adding image to gallery:", e);
        setLoading(false);
      }
    } catch (err) {
      console.log("Error uploading image:", err);
    } finally {
      setLoading(false); // Set loading state to false when uploading finishes
    }
  }

  return (
    <div>
      <>
        <div className="gallery-main-body">
          <h1 className="gallery-title">Gallery</h1>
          <input
            id="selectFile-button"
            className="gallery-input"
            type="file"
            name="image"
            onChange={handleChange}
          ></input>
          <label className="selectFile-button" htmlFor="selectFile-button">
            Select files
          </label>

          <br></br>
          <br></br>
          <br></br>
        </div>
        {loading && <Spinner />}
        {!loading && <Gallery imageArray={imageArray} />}
      </>
    </div>
  );
};

export default GalleryMain;
