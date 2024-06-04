let eventGuid = 0;

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
  },
];

export function createEventId() {
  return String(eventGuid++);
}
