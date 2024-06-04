import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { LuFileBadge2 } from "react-icons/lu";
import "../ClubCouncil/ClubCouncil.css";
import data from "../../utils/clubcouncil";
import eventdata from "../../utils/eventlist";
import clubProfile from "../../utils/clubProfile";

const Card = (props) => {
  return (
    <div>
      <div className="executive-card">
        <div>
          <img className="image" src={props.imgUrl} alt="event-card" />
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

const Banner = (props) => {
  console.log(props.clubBannerUrl);
  return (
    <div className="h-52 overflow-hidden rounded-2xl">
      <img
        src={props.clubBannerUrl}
        alt="Club Banner"
        className="relative bottom-48 w-full rounded-2xl"
      />
    </div>
  );
};

const Description = (props) => {
  const {
    clubImageUrl,
    clubName,
    tagLine,
    description,
    instagramUrl,
    mailId,
    youtubeUrl,
  } = props.clubList;

  return (
    <div className="">
      <div className="p-7 flex items-center">
        <img
          src={clubImageUrl}
          className="w-24 h-24 rounded-full"
          alt="profile-logo"
        />
        <div className="m-5">
          <h1 className="text-3xl font-bold">{clubName}</h1>
          <p className="text-gray-500 pt-2">{tagLine}</p>
        </div>
      </div>

      <div className="pb-9">
        <p>{description}</p>
      </div>
      <div className="flex items-center gap-2 mb-8">
        {<CgMail />}
        <Link to={`mailto:${mailId}`}>Mail</Link>
        {<FaInstagram />}
        <Link to={instagramUrl}>Mail</Link>
        {<FaFacebook />}
        <Link to={instagramUrl}>Facebook</Link>
        {<FaYoutube />}
        <Link to={youtubeUrl}>Youtube</Link>
      </div>
      <hr className="border-dotted" />
    </div>
  );
};

const EventCard = (props) => {
  return (
    <div className="h-96 ml-1 mr-3 rounded-3xl bg-gray-50  hover:bg-gray-100 rounded-3xl">
      <img src={props.imgUrl} className="h-60 rounded-t-3xl" alt="event" />
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
  const { id } = useParams();
  //console.log(id);
  const [clubList, setClubList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await clubProfile(id);
      setClubList(data);
    };
    fetchData();
  }, [id]);

  return clubList.length === 0 ? null : (
    <div>
      <Banner clubBannerUrl={clubList[0]?.clubBannerUrl} />
      <Description clubList={clubList[0]} />
      <Events />
      <Members />
    </div>
  );
};

export default ClubProfile;
