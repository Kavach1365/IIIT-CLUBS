import { useState } from "react";
import axios from "axios";
import "./AddClub.css";
import { FaFile } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

const categories = [
  {
    categoryId: "TECHNICAL",
    displayText: "Technical Club",
  },
  {
    categoryId: "CULTURAL",
    displayText: "Cultural Club",
  },
  {
    categoryId: "ACADEMICS",
    displayText: "Academics",
  },
  {
    categoryId: "SPORTS",
    displayText: "Sports Club",
  },
  {
    categoryId: "SERVICE",
    displayText: "Service Club",
  },
];

const AddClub = () => {
  const [clubName, setClubName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0].categoryId);
  const [instagramUrl, setInstagramUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [mailId, setMailId] = useState("");

  // State for holding the uploaded image URL
  const [clubImage, setClubImage] = useState("");
  const [clubBanner, setClubBanner] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isUploadingBanner, setIsUploadingBanner] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    setIsUploadingImage(true);
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
      setClubImage(res.data.secure_url);
      // imgUrl = res.data.secure_url;
      setIsUploadingImage(false);
    } catch (err) {
      console.error("Error uploading image:", err);
      setIsUploadingImage(false);
    }
  };

  const uploadBannerImage = async (e) => {
    e.preventDefault();
    setIsUploadingBanner(true);
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
      setClubBanner(res.data.secure_url);
      // imgUrl = res.data.secure_url;
      setIsUploadingBanner(false);
    } catch (err) {
      console.error("Error uploading image:", err);
      setIsUploadingBanner(false);
    }
  };

  const addClubData = async (e) => {
    e.preventDefault();
    const clubData = {
      clubName: clubName,
      tagLine: tagLine,
      description: description,
      category: category,
      clubImage: clubImage,
      clubBanner: clubBanner,
      instagramUrl: instagramUrl,
      twitterUrl: twitterUrl,
      mailId: mailId,
      youtubeUrl: youtubeUrl,
    };
    console.log(clubData);

    if (
      clubName === "" ||
      tagLine === "" ||
      description === "" ||
      category === "" ||
      clubImage === "" ||
      clubBanner === "" ||
      instagramUrl === "" ||
      twitterUrl === "" ||
      mailId === "" ||
      youtubeUrl === ""
    ) {
      setErrorMessage(true);
      return;
    }

    setErrorMessage(false);
    try {
      const res = await axios.post("http://localhost:8005/add-club", clubData);
      console.log(res);
      // Reset form fields after successful submission
    } catch (e) {
      console.error("Error adding event:", e);
    }

    // imgUrl = "";
    setClubName("");
    setTagLine("");
    setDescription("");
    setCategory("");
    setClubImage("");
    setClubBanner("");
    setTwitterUrl("");
    setInstagramUrl("");
    setMailId("");
    setYoutubeUrl("");
  };

  const changeClubCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <h1 className="add-event-title">Add Club</h1>
      <form className="form-comp" onSubmit={addClubData}>
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
          <label htmlFor="tagLine">Tag Line</label>
          <input
            type="text"
            id="tagLine"
            placeholder="Enter the TagLine.."
            onChange={(e) => setTagLine(e.target.value)}
            value={tagLine}
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

        <div className="form-group">
          <label htmlFor="category">Select Club Category</label>
          <select
            value={category}
            onChange={changeClubCategory}
            className="form-group"
          >
            {categories.map((eachCategory) => (
              <option value={eachCategory.id} key={eachCategory.id}>
                {eachCategory.displayText}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="instagramUrl">Instagram Url</label>
          <input
            type="text"
            id="instagramUrl"
            placeholder="Enter Instagram Url.."
            onChange={(e) => setInstagramUrl(e.target.value)}
            value={instagramUrl}
          />
        </div>

        <div className="form-group">
          <label htmlFor="twitterUrl">Twitter Url</label>
          <input
            type="text"
            id="twitterUrl"
            placeholder="Enter Twitter Url.."
            onChange={(e) => setTwitterUrl(e.target.value)}
            value={twitterUrl}
          />
        </div>

        <div className="form-group">
          <label htmlFor="instagramUrl">Youtube Url</label>
          <input
            type="text"
            id="youtubeUrl"
            placeholder="Enter Youtube Url.."
            onChange={(e) => setYoutubeUrl(e.target.value)}
            value={youtubeUrl}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mail">Mail id</label>
          <input
            type="text"
            id="mail"
            placeholder="Enter Mail id"
            onChange={(e) => setMailId(e.target.value)}
            value={mailId}
          />
        </div>

        {/* changed */}

        <div className="images-container ">
          <div>
            <h1>Select Image</h1>
            {!isUploadingImage && (
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
            {isUploadingImage && (
              <div className="form-group input-file image-added">
                <label htmlFor="file">Uploading File</label>
                <div className="upload-spinner">
                  <FaSpinner className="spinner-icon" />
                </div>
              </div>
            )}

            <div className="preview-image-div  form-group">
              {clubImage && (
                <img className="preview-image" src={clubImage} alt="" />
              )}
            </div>
          </div>
          <div>
            <h1>Select Banner Image</h1>
            {!isUploadingBanner && (
              <div className="form-group input-file">
                <label className={`file-input-label`} htmlFor="bannerImage">
                  Upload File
                </label>
                <FaFile />
                <input
                  className="file-input"
                  type="file"
                  id="bannerImage"
                  onChange={uploadBannerImage}
                />
              </div>
            )}
            {isUploadingBanner && (
              <div className="form-group input-file image-added">
                <label htmlFor="file">Uploading File</label>
                <div className="upload-spinner">
                  <FaSpinner className="spinner-icon" />
                </div>
              </div>
            )}

            <div className="preview-image-div  form-group">
              {clubBanner && (
                <img className="preview-image" src={clubBanner} alt="" />
              )}
            </div>
          </div>
        </div>

        <button className="add-event-button" type="submit">
          Submit
        </button>
        {errorMessage && (
          <p className="error-message ">**Please enter the data!**</p>
        )}
      </form>
    </div>
  );
};

export default AddClub;
