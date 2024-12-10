import React from "react";
import Profile from "../assets/about-me.png";
import Hashtag from "./Hashtag";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="pb-8">
            <p className="text-4xl font-bold inline-flex items-center">
              <Hashtag />
              about
              <span class="block w-56 h-[2px] bg-[#c470db] mx-2"></span>
            </p>
          </div>
          <div></div>
        </div>
        <div className="w-full grid sm:grid-cols-2 gap-8">
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
          <div className="flex justify-center items-center w-50 h-50 p-[3rem]">
            <img
              src={Profile}
              alt="profile"
              className="w-full h-full object-cover border-b-2 border-[#c470db]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
