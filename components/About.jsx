import React from "react";
import img from "../assets/img/about.jpeg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Me
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4 text-2xl ">
          <p>
          Welcome to Danja Tattoo Studio! I am Danja, a passionate and dedicated tattoo artist with over 2 years of experience in the industry. 
          My journey began with a love for art and a desire to create unique, meaningful designs that clients can cherish forever. 
          I take pride in transforming your ideas into stunning, custom tattoos. Every piece is crafted with precision, creativity, and a commitment to excellence. 
          Let's create something beautiful together!
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
