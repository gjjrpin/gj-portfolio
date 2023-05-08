import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#192841] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#D49902]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi! I'm GJ, nice to meet you. Feel free to take a look around!
            </p>
          </div>
          <div>
            <p>
              As a passionate web developer, I stay ahead of emerging
              technologies to create innovative web applications that meet the
              needs of users. My commitment to staying up-to-date with emerging
              AI technologies and understanding diverse perspectives ensures
              that my work is human-centered and cutting-edge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
