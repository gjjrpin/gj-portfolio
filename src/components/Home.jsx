import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="w-full h-screen bg-[#192841]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="sm:text-3xl text-[#0397B2]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#F4B324]">
          GJ Pineda
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#FFFFFF]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#FFFFFF] py-4 max-w-[700px] leading-loose">
          with a passion for creating human-centered, responsive designs that
          make the web more accessible and intuitive.
        </p>
        <div>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0397B2] hover:border-[#0397B2]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
