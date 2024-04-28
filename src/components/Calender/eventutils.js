let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "farewell",
    start: "2024-03-30T00:00:00", // Indian Standard Time (IST)
    // Indian Standard Time (IST),
  },
  {
    id: createEventId(),
    title: "Sehari",
    start: "2024-03-31T00:00:00", // Indian Standard Time (IST)
  },

  {
    id: createEventId(),
    title: "Play-Palooza",
    start: "2024-04-01T10:00:00", // Indian Standard Time (IST)
  },
  {
    id: createEventId(),
    title: "Codeclub Recruitement",
    start: "2024-04-25T10:00:00", // Indian Standard Time (IST)
  },
  {
    id: createEventId(),
    title: "Expert Talks",
    start: "2024-04-28T10:00:00", // Indian Standard Time (IST)
    end: "2024-04-28T11:00:00", // Indian Standard Time (IST)
  },
];

export function createEventId() {
  return String(eventGuid++);
}
