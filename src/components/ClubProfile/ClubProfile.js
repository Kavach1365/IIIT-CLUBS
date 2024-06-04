import React from "react";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { LuFileBadge2 } from "react-icons/lu";
import "../ClubCouncil/ClubCouncil.css";
import data from "../../utils/clubcouncil";
import eventdata from "../../utils/eventlist";

const Card = (props) => {
  return (
    <div>
      <div className="executive-card">
        <div>
          <img className="image" alt={props.name} src={props.imgUrl} />
        </div>
        <h1 className="name">{props.name}</h1>
        <p className="role">{props.role}</p>
        <p className="year">
          {props.startYear}-{props.endYear}
        </p>
      </div>
    </div>
  );
};

const Members = () => {
  return (
    <div>
      <div>
        <div className="flex text-2xl mt-8 items-center">
          {<LuFileBadge2 />}
          <p className="font-semibold text-gray-800 pl-4">Members</p>
        </div>
      </div>
      <div className="executive-container">
        {data.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="">
      <img
        src="https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DiqnFE5gssQgquHaLA23RA8_hacking.club.png&w=256&q=75"
        alt="Club Banner"
        className="h-44 w-full rounded-2xl"
      />
    </div>
  );
};

const Description = () => {
  return (
    <div className="">
      <div className="p-7 flex items-center">
        <img
          src="https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DiqnFE5gssQgquHaLA23RA8_hacking.club.png&w=256&q=75"
          className="w-24 h-24 rounded-full"
          alt="banner"
        />
        <div className="m-5">
          <h1 className="text-3xl font-bold">0x1337: The Hacking Club</h1>
          <p className="text-gray-500 pt-2">
            Exploiting vulnerabilities for fun and teaching about security in
            today's world
          </p>
        </div>
      </div>

      <div className="pb-9">
        <p>
          We are a club based on ethical hacking, where we try to familiarize
          people with different tools and ways of ethical hacking and make them
          aware about how cybersecurity is so important in today’s world.
        </p>
      </div>
      <div className="flex items-center gap-2 mb-8">
        {<CgMail />}
        <Link>varshavarshu555@gmail.com</Link>
        {<FaInstagram />}
        <Link>Hackingclubiith</Link>
        {<FaFacebook />}
        <Link>Hackingclubiith</Link>
        {<FaYoutube />}
        <Link>Hackingclubiith</Link>
      </div>
      <hr className="border-dotted" />
    </div>
  );
};

const EventCard = (props) => {
  return (
    <div className="h-96 ml-1 mr-3 rounded-3xl bg-gray-50  hover:bg-gray-100 rounded-3xl">
      <img src={props.imgUrl} alt={props.name} className="h-60 rounded-t-3xl" />
      <div className="mt-6">
        <h1 className="text-base font-semibold">{props.name}</h1>
        <p className="text-gray-400 text-xs">{props.date}</p>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div>
      <div>
        <div className="flex text-2xl m-4 pb-5 items-center">
          {<LuFileBadge2 />}
          <p className="font-semibold text-gray-800 pl-4">Events</p>
        </div>
      </div>
      <div className="executive-container">
        {eventdata.map((item) => (
          <EventCard {...item} />
        ))}
      </div>
    </div>
  );
};

const ClubProfile = () => {
  return (
    <div>
      <Banner />
      <Description />
      <Events />
      <Members />
    </div>
  );
};

export default ClubProfile;
