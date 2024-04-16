import React from "react";
import { v4 as uuidv4 } from "uuid";
const recentEventsList = [
  {
    id: uuidv4(),
    imgUrl:
      "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DdCAvbUVKsVFZuHcioYG7zE_thegamingclub.jpg&w=256&q=75",
    eventName: "Gamedev WorkShop 3",
    clubName: "The Gaming Club",
    startDate: "16 Apr, 7:00 PM",
    endDate: "16 Apr, 8:00 PM",
    venue: "Himalaya 104, Himalaya 101, Vindhya SH1",
    eligibility: ["P2", "E1", "E2", "E3"],
    description:
      "Embark on an inclusive Game Development Workshop centered around the Pygame framework in Python. Participants will engage in interactive hands-on activities tailored for beginners, fostering an accessible learning environment. Delve into the realm of game development as attendees explore the Pygame framework together. Whether individuals are novices in programming or seeking to enhance their skills, this workshop offers an interactive and beginner-friendly tutorial experience. Don't pass up the chance to unleash creativity and craft captivating games with Pygame!",
  },
  {
    id: uuidv4(),
    imgUrl:
      "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DNwGshKAZ3jrEh4gqTNnYxk_FSIS.jpg&w=2048&q=75",
    eventName: "FSIS with non-graduating students (UG 1/2/3, PG1, MS/PhD)",
    clubName: "Student Life Office",
    startDate: "18 Apr, 5:00 PM",
    endDate: "18 Apr, 6:30 PM",
    venue: "Himalaya 105",
    eligibility: [],
    description: "FSIS is a program to share and discuss your experience.",
  },
  {
    id: uuidv4(),
    imgUrl:
      "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3Db5EkLzmUBx68gBYdoLjX3L_thelanguageclub.jpeg&w=256&q=75",
    eventName: "Samskrit Sambhashanam",
    clubName: "The Language Club",
    startDate: "21 Apr, 6:00 PM",
    endDate: "21 Apr, 7:00 PM",
    venue: "Himalaya 203",
    eligibility: ["Faculty", "E1", "E2", "E3", "E4", "Staff"],
    description:
      "Join Samskrit Sambhashanam Event! Dear all, Namaste! Key Features of Samskrit Sambhashanam: 1. संवादसौभाग्यम् (Samvādasaubhāgyam): Immerse yourself in engaging group conversations, crafting sentences for hands-on learning. 🗣️✨ 2. उच्चारणक्रियाः (Ucchāraṇakriyāḥ): Perfect your skills with end-session speaking exercises and interactive quizzes. 🎙️🧠 Additionally, let's uncover intriguing Samskrit facts, igniting interest in this ancient language without any bore! 🤓🌍     Whether you're a seasoned linguist or a beginner, this workshop welcomes all with open arms. Join us every Sunday (also on this Sunday, April 21st) from 6:00 to 7:00 pm at H203 for this linguistic adventure! 🗓️📍 Looking forward to exploring the beauty of Samskrit with you! Best regards, The Language Club, IIITH.",
  },
  {
    id: uuidv4(),
    imgUrl:
      "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3Db5EkLzmUBx68gBYdoLjX3L_thelanguageclub.jpeg&w=256&q=75",
    eventName: "Samskrit Sambhashanam",
    clubName: "The Language Club",
    startDate: "28 Apr, 6:00 PM",
    endDate: "28 Apr, 7:00 PM",
    venue: "Himalaya 203",
    eligibility: ["Faculty", "E1", "E2", "E3", "E4", "Staff"],
    description:
      "Join Samskrit Sambhashanam Event! Dear all, Namaste! Key Features of Samskrit Sambhashanam: 1. संवादसौभाग्यम् (Samvādasaubhāgyam): Immerse yourself in engaging group conversations, crafting sentences for hands-on learning. 🗣️✨ 2. उच्चारणक्रियाः (Ucchāraṇakriyāḥ): Perfect your skills with end-session speaking exercises and interactive quizzes. 🎙️🧠 Additionally, let's uncover intriguing Samskrit facts, igniting interest in this ancient language without any bore! 🤓🌍     Whether you're a seasoned linguist or a beginner, this workshop welcomes all with open arms. Join us every Sunday (also on this Sunday, April 21st) from 6:00 to 7:00 pm at H203 for this linguistic adventure! 🗓️📍 Looking forward to exploring the beauty of Samskrit with you! Best regards, The Language Club, IIITH.",
  },
];
const recentEvents = () => {
  return recentEventsList;
};

export default recentEvents;
