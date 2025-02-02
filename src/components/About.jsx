import React from "react";
import Profile from "../assets/profile.png";
import Hashtag from "./Hashtag";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full  text-gray-300 pt-52 sm:pt-0"
    >
      <div className="flex justify-center">
        <figure className="text-gray-300 border p-4 md:p-8 mb-16 max-w-lg">
          <blockquote className="text-lg font-bold">
            "I’m not superstitious, but I am a little stitious."
          </blockquote>
          <figcaption className="text-right">- Michael Scott</figcaption>
        </figure>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="pb-8">
            <p className="text-4xl font-bold inline-flex items-center">
              <Hashtag />
              about
              <span class="block w-32 h-[2px] bg-[#c470db] mx-2"></span>
            </p>
          </div>
          <div></div>
        </div>
        <div className="w-full grid sm:grid-cols-2 gap-8">
          <div className="flex items-center leading-loose">
            <p>
              Driven by a background in Software Development and a passion for
              Fraud Analytics, I’ve transitioned into a Senior Fraud Analyst
              role where I tackle emerging threats with a tech-first approach.
              Staying ahead of advancements in AI and cybersecurity allows me to
              create innovative, human-centered strategies to detect and prevent
              fraud effectively.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Profile}
              alt="profile"
              className="w-46 h-96 object-cover border-b-2 border-[#c470db] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
