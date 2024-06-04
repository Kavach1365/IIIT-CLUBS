import axios from "axios";

const clubProfile = async (id) => {
  const clubId = id;
  console.log(clubId);
  let clubsList = [];
  try {
    const response = await axios.get(
      `http://localhost:8005/clubProfile?clubId=${id}`
    );
    clubsList = await response.data;
    return clubsList;
  } catch (e) {
    return clubsList;
  }
};

export default clubProfile;
