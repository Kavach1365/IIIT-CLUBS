// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const upComingEvents = async () => {
  let upComingEventsList = [];
  try {
    const response = await axios.get("http://localhost:8005/upComing-events");
    upComingEventsList = response.data;
  } catch (e) {
    return upComingEventsList;
  }
  // console.log(recentEventsList);
  return upComingEventsList;
};

export default upComingEvents;
