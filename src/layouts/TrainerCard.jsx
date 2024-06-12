import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsTwitterX } from "react-icons/bs";

const TrainerCard = (props) => {
  return (
    <div className="flex flex-col items-center gap-5 pt-9 pb-4 w-full md:w-1/4 bg-[#222] rounded-xl">
      <div className="w-3/4">
        <img
          className="rounded-lg hover:scale-105"
          src={props.img}
          alt="Trainer"
        />
      </div>
    </div>
  );
};

export default TrainerCard;
