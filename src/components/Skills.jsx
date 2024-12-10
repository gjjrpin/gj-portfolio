import React from "react";

import AWS from "../assets/aws.png";
import SASS from "../assets/sass.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Heroku from "../assets/heroku.png";
import Tailwind from "../assets/tailwind.png";
import Mysql from "../assets/mysql.png";
import Hashtag from "./Hashtag";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300">
      {/* Container */}
      <div className="py-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline-flex items-center">
            <Hashtag />
            skills<span class="block w-56 h-[2px] bg-[#c470db] mx-2"></span>
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SASS} alt="HTML icon" />
            <p className="my-4">SASS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mysql} alt="HTML icon" />
            <p className="my-4">MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Heroku} alt="HTML icon" />
            <p className="my-4">HEROKU</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
            <p className="my-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
