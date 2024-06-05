import axios from "axios";

const clubEvents = async (name) => {
  const clubName = name;
  let clubEventsList = [];
  try {
    const response = await axios.get(
      `http://localhost:8005/club-events?clubName=${clubName}`
    );
    clubEventsList = await response.data;
    return clubEventsList;
  } catch (e) {
    return clubEventsList;
  }
};

export default clubEvents;
