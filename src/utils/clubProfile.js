import axios from "axios";

const clubProfile = async ({ clubId, clubName }) => {
  let clubsList = [];
  try {
    let url;
    if (clubId) {
      url = `http://localhost:8005/clubProfile?clubId=${clubId}`;
    } else if (clubName) {
      url = `http://localhost:8005/clubProfile?clubName=${clubName}`;
    } else {
      throw new Error("Missing parameterss: clubId or clubName");
    }

    const response = await axios.get(url);
    clubsList = await response.data;
    return clubsList;
  } catch (e) {
    console.error("Error fetching club profile:", e);
    return clubsList;
  }
};

export default clubProfile;
