import React from "react";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import clubList from "../../utils/club"; // Assuming clubList contains the data
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div
      key={props.id}
      className="relative max-w-xs rounded-2xl overflow-hidden shadow-lg group"
    >
      <img
        src={props.imgUrl}
        alt={props.clubName}
        className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-200"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
          <img
            src={props.imgUrl}
            className="w-full h-full object-cover"
            alt={props.clubName}
          />
        </div>
        <h1 className="pt-4 pb-4 font-bold text-xl text-white">
          {props.clubName}
        </h1>
        <p className="text-white text-xs">{props.description}</p>
      </div>
    </div>
  );
};

const CategorySection = ({ category }) => {
  return (
    <div className="pb-5">
      <div className="mt-0 flex pb-5 items-center">
        <LiaNetworkWiredSolid className="text-2xl" />
        <p className="uppercase text-base tracking-tighter font-medium text-gray-900">
          {category}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 cursor-pointer">
        {clubList.map((item) =>
          item.Category === category ? (
            <Link to="/club-profile">
              <Item key={item.id} {...item} />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

const Clubs = () => {
  return (
    <div>
      <CategorySection category="technical club" />
      <CategorySection category="cultural club" />
      <CategorySection category="affinity groups" />
    </div>
  );
};

export default Clubs;
