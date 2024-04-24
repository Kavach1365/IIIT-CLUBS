import { useRef } from "react";
import axios from "axios";

const AddEvents = () => {
  const clubName = useRef();
  const eventName = useRef();
  const imgUrl = useRef();
  const startDate = useRef();
  const endDate = useRef();
  const venue = useRef();
  const eligibility = useRef();
  const description = useRef();

  const addEventsData = async (e) => {
    e.preventDefault();
    const eventData = {
      clubName: clubName.current.value,
      eventName: eventName.current.value,
      imgUrl: imgUrl.current.value,
      startDate: startDate.current.value,
      endDate: endDate.current.value,
      venue: venue.current.value,
      eligibility: eligibility.current.value.split(","),
      description: description.current.value,
    };

    try {
      await axios
        .post("http://localhost:8000/add-upcoming-events", eventData)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log("Error");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form action="POST">
        <input type="text" placeholder="Enter the club name.." ref={clubName} />
        <input
          type="text"
          placeholder="Enter the event name.."
          ref={eventName}
        />
        <input type="text" placeholder="Enter the image url.." ref={imgUrl} />
        <input
          type="text"
          placeholder="Enter the start date.."
          ref={startDate}
        />
        <input type="text" placeholder="Enter the endDate.." ref={endDate} />
        <input type="text" placeholder="Enter the venue.." ref={venue} />
        <input
          type="text"
          placeholder="Enter the eligibility like(P1,P2,E1..).."
          ref={eligibility}
        />
        <input
          type="text"
          placeholder="Enter the event description.."
          ref={description}
        />
        <button onClick={addEventsData}>Add</button>
      </form>
    </div>
  );
};

export default AddEvents;
