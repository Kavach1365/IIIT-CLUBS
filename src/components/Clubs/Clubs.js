import React, { useEffect, useState } from "react";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import club from "../../utils/club"; // Assuming clubList contains the data

const Item = (props) => {
  return (
    <div
      key={props.id}
      className="h-[300px] relative w-100 rounded-2xl overflow-hidden shadow-lg group"
    >
      <img
        src={props.clubBannerUrl}
        alt={props.clubName}
        className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-200"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
          <img
            src={props.clubImageUrl}
            className="w-full h-full object-cover"
            alt={props.clubName}
          />
        </div>
        <h1 className="pt-4 pb-4 font-bold text-xl text-white">
          {props.clubName}
        </h1>
        <p className="text-white text-xs">{props.tagLine}</p>
      </div>
    </div>
  );
};

const CategorySection = ({ category, clubs }) => {
  return (
    <div className="pb-5">
      <div className="mt-0 flex pb-5 items-center">
        <LiaNetworkWiredSolid className="text-2xl" />
        <p className="uppercase text-base tracking-tighter font-medium text-gray-900">
          {category}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 cursor-pointer">
        {clubs.map((item) => {
          return item.category === category ? (
            <Link key={item.id} to="/club-profile">
              <Item {...item} />
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};

const Clubs = () => {
  const [clubList, setClubList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await club();
      setClubList(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <CategorySection category="TECHNICAL" clubs={clubList} />
      <CategorySection category="CULTURAL" clubs={clubList} />
      <CategorySection category="AFFINITY" clubs={clubList} />
    </div>
  );
};

export default Clubs;
