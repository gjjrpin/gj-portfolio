import React from "react";
import Profile from "../assets/profile.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#282c33] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#c470db]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex justify-center items-center w-50 h-50 p-[3rem]">
            <img
              src={Profile}
              alt="profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center leading-loose">
            <p>
              Driven by a background in Software Development and a passion for
              Cybersecurity, I’ve transitioned into a Senior Fraud Analyst role
              where I tackle emerging threats with a tech-first approach.
              Staying ahead of advancements in AI and cybersecurity allows me to
              create innovative, human-centered strategies to detect and prevent
              fraud effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
