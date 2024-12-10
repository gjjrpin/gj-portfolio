import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Hero from "../assets/hero.png";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="w-full h-screen mb-16">
      {/* Container */}
      <div className="h-[750px] flex">
        <div className="flex flex-col justify-center h-full">
          <div className="">
            <span className="text-4xl sm:text-3xl text-[#ffffff]">
              I am a&nbsp;
            </span>
            <span className="text-4xl sm:text-3xl text-[#c470db]">
              Fraud Analyst&nbsp;
            </span>
            <span className="text-4xl sm:text-3xl text-[#ffffff]">
              and&nbsp;
            </span>
            <span className="text-4xl sm:text-3xl text-[#c470db]">
              Cyber Security enthusiast
            </span>
          </div>
          <p className="text-[#FFFFFF] py-4 max-w-[700px] leading-loose">
            I prevent and investigate fraud, enhancing client trust through
            problem-solving and communication.
          </p>
          <div>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center border-[#c470db] hover:bg-[rgba(196,112,219,0.15)] hover:border-[#c470db]">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden w-7/12 lg:flex  items-center">
          <img
            className="scale-110 border-b-2 border-[#c470db]"
            src={Hero}
            alt="Hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
