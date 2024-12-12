import React from "react";
import { data } from "../data/data.js";
import Hashtag from "./Hashtag";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);
  return (
    <div name="work" className="w-full md:h-screen text-gray-300">
      <div className="pt-52 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline-flex items-center">
            <Hashtag />
            work<span class="block w-32 h-[2px] bg-[#c470db] mx-2"></span>
          </p>
        </div>

        {/* container for projects */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div key={index} className="flex flex-col mx-auto border">
              <img
                className="flex-1 md:flex-initial md:h-64"
                src={item.image}
              />
              <div className="p-2">{item.technologies}</div>
              <div className="border-t p-4 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                <p>{item.description}</p>
                <div className="flex gap-4">
                  <a
                    href={item.github}
                    className="text-gray-300 border-2 px-4 py-2 border-[#c470db] hover:bg-[rgba(196,112,219,0.15)] hover:border-[#c470db]"
                  >
                    Github
                  </a>
                  <a
                    href={item.live}
                    className="text-gray-300 border-2 px-4 py-2 border-[#c470db] hover:bg-[rgba(196,112,219,0.15)] hover:border-[#c470db]"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
