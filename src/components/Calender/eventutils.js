let eventGuid = 0;
<<<<<<< HEAD

export const INITIAL_EVENTS = [
  {
    id: "Fashion Frenzy",
    title: "Fashion Frenzy",
    start: "2024-04-02T00:00:00", // Indian Standard Time (IST)
    end: "2024-04-29T20:00:00", // Indian Standard Time (IST),
  },
  {
    id: "F Frenzy",
    title: "F Frenzy",
    start: "2024-04-01T00:00:00", // Indian Standard Time (IST)
    end: "2024-04-30T20:00:00", // Indian Standard Time (IST)
  },
  {
    id: "Fashion Frenzy2",
    title: "Fashion Frenzy",
    start: "2024-04-28T9:00:00", // Indian Standard Time (IST)
    end: "2024-04-28T20:00:00", // Indian Standard Time (IST)
  },
  {
    id: "Fashion Frenzy3",
    title: "Fashion Frenzy",
    start: "2024-04-28T11:00:00", // Indian Standard Time (IST)
    end: "2024-04-28T20:00:00", // Indian Standard Time (IST)
=======
// let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

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
>>>>>>> 04790cb7b48e5f687fcdc20430c629888fcf484b
  },
];

export function createEventId() {
  return String(eventGuid++);
}
