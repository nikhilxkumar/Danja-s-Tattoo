import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import TrainerCard from "../layouts/TrainerCard";

const Trainers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center mt-10">Gallery</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
        <TrainerCard img={img1}  />
        <TrainerCard img={img2}  />
        <TrainerCard img={img3}  />
      </div>
    </div>
  );
};

export default Trainers;
