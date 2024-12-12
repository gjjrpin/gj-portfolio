import React from "react";
import Logooutline from "../assets/logo-outline.svg";
import Hashtag from "./Hashtag";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300">
      {/* Container */}
      <div className="pt-52 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline-flex items-center">
            <Hashtag />
            skills<span class="block w-32 h-[2px] bg-[#c470db] mx-2"></span>
          </p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row">
          <div className="relative md:w-2/5 h-64">
            <img
              className="absolute top-16 right-16"
              src={Logooutline}
              alt="logo"
            />
          </div>
          <div className="md:w-1/2">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border">
                <h3 className="border-b p-2 text-white">Languages</h3>
                <p className="p-2">Javascript</p>
                <p className="p-2">Typescript</p>
                <p className="p-2">Python</p>
              </div>
              <div className="border">
                <h3 className="border-b p-2 text-white">Database</h3>
                <p className="p-2">MySQL</p>
                <p className="p-2">MySQL</p>
                <p className="p-2">MySQL</p>
              </div>
              <div className="border">
                <h3 className="border-b p-2 text-white">Fraud</h3>
                <p className="p-2">Cybersecurity</p>
                <p className="p-2">Cybersecurity</p>
                <p className="p-2">Cybersecurity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
