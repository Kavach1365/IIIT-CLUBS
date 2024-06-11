import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { LuFileBadge2 } from "react-icons/lu";
import { HiUserGroup } from "react-icons/hi2";
import "../ClubCouncil/ClubCouncil.css";
import clubProfile from "../../utils/clubProfile";
import clubEvents from "../../utils/clubEvents";
import clubMembers from "../../utils/clubMembers";

const Card = (props) => {
  return (
    <div>
      <div className="executive-card w-60 flex flex-col items-center border-emerald-900 border-2 ">
        <div>
          <img className="image" src={props.imageUrl} alt="event-card" />
        </div>
        <h1 className="name">{props.name}</h1>
        <p className="role">{props.position}</p>
      </div>
    </div>
  );
};

const Members = ({ clubMembersList, isClubAdmin }) => {
  const { id } = useParams();
  return (
    <div>
      <div>
        <div className="flex text-2xl mt-8 mb-8 items-center">
          <HiUserGroup />
          <div className="flex justify-between flex-grow">
            <p className="font-semibold text-gray-800 pl-4">Members</p>
            {isClubAdmin && (
              <Link to={`/add-club-member/${id}`}>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm">
                  Add Members
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="executive-container">
        {clubMembersList.map((item) => (
          <Card key={item.memberId} {...item} />
        ))}
      </div>
    </div>
  );
};

const Banner = (props) => {
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
  const { id } = useParams();
  return (
    <div className="">
      <div className="p-7 flex items-center justify-between">
        <div className="flex items-center">
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
        {props.isClubAdmin && (
        <Link to={`/club-profile/${id}/edit`}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Edit
          </button>
        </Link>
        )}
      </div>

      <div className="pb-9">
        <p>{description}</p>
      </div>
      <div className="flex items-center gap-2 mb-8">
        <CgMail />
        <Link to={`mailto:${mailId}`}>Mail</Link>
        <FaInstagram />
        <Link to={instagramUrl}>Instagram</Link>
        <FaFacebook />
        <Link to={instagramUrl}>Facebook</Link>
        <FaYoutube />
        <Link to={youtubeUrl}>Youtube</Link>
      </div>
      <hr className="border-dotted" />
    </div>
  );
};

const EventCard = (props) => {
  return (
    <Link to={`/events/${props._id}`}>
      <div className="h-96 ml-1 mr-3 rounded-3xl bg-gray-50  hover:bg-gray-100">
        <img
          src={props.imgUrl}
          className="h-60 w-60 rounded-t-3xl"
          alt="event"
        />
        <div className="mt-6">
          <h1 className="text-base font-semibold">{props.eventName}</h1>
          <p className="text-gray-400 text-xs">{props.startDate}</p>
        </div>
      </div>
    </Link>
  );
};

const Events = ({ eventsList, isClubAdmin }) => {
  const { id } = useParams();
  return (
    <div>
      <div>
        <div className="flex text-2xl m-4 pb-5 items-center">
          <LuFileBadge2 />
          <div className="flex justify-between flex-grow">
            <p className="font-semibold text-gray-800 pl-4">Events</p>
            {isClubAdmin && (
              <Link to={`/add-events/${id}`} className="ml-auto">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm">
                  Add Events
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="executive-container">
        {eventsList.map((item) => (
          <EventCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

const ClubProfile = () => {
  const { id } = useParams();
  const [clubList, setClubList] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [clubMembersList, setClubMembersList] = useState([]);
  const [isClubAdmin, setIsClubAdmin] = useState(false); // State variable to track if the user is a club admin

  useEffect(() => {
    const fetchData = async () => {
      const data = await clubProfile({clubId:id});
      const events = await clubEvents(data[0].clubName);
      const members = await clubMembers(data[0].clubName);
      setClubList(data);
      setEventsList(events);
      setClubMembersList(members);

      // Check if the user is a club admin by comparing with some user data in localStorage
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        const user = JSON.parse(userInfo);
        if (user.isSuperAdmin || data[0].clubAdmins.includes(user._id)) {
          setIsClubAdmin(true);
        }
      }
    };
    fetchData();
  }, [id]);

  return clubList.length === 0 ? null : (
    <div>
      <Banner clubBannerUrl={clubList[0]?.clubBannerUrl} />
      <Description clubList={clubList[0]} isClubAdmin={isClubAdmin}/>
      <Events eventsList={eventsList} isClubAdmin={isClubAdmin} />
      <Members clubMembersList={clubMembersList} isClubAdmin={isClubAdmin} />
    </div>
  );
};

export default ClubProfile;
