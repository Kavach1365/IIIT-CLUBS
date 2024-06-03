// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const events = async () => {
  let recentEventsList;
  try {
    const response = await axios.get("http://localhost:8005/events");
    recentEventsList = response.data;
  } catch (e) {
    recentEventsList = [];
  }
  // console.log(recentEventsList);
  return recentEventsList;
};

export default events;
