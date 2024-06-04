import axios from "axios";
const specificEvent = async (id) => {
  let specificEventList = [];
  try {
    const response = await axios.get(`http://localhost:8005/all-events/${id}`);
    specificEventList = response.data;
  } catch (e) {
    return specificEventList;
  }
  // console.log(recentEventsList);
  return specificEventList;
};

export default specificEvent;
