export const formatDateForEvents = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;

  return `${day} ${month}, ${hours}:${minutesFormatted} ${ampm}`;
};

//   // Example usage
//   const date = new Date("2020-02-13T00:00:00"); // February 13, 2020, at 12:00 AM
//   const formattedDate = formatDateToCustomString(date);

//   console.log(formattedDate); // Outputs: 13 Feb, 12:00 AM
