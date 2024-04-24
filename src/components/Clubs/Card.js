// CardComponent.js

import React from "react";
import clubList from "../../utils/club"; // Assuming cardData.js contains the data

const CardComponent = () => {
  return (
    <div className="auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 h-80 cursor-pointer">
      {clubList.map((card) => (
        <div
          key={card.id}
          className="relative max-w-xs  rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src={card.imgUrl}
            alt={card.clubName}
            className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-200"
          />

          <div className="absolute inset-0 flex flex-col  justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
              <img
                src={card.imgUrl}
                className="w-full h-full object-cover"
                alt={card.clubName}
              />
            </div>
            <h1 className="pt-4 pb-4 font-bold text-xl text-white">
              {card.clubName}
            </h1>
            <p className="text-white text-xs">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardComponent;
