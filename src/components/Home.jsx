import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="w-full h-screen bg-[#282c33]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex">
          <p className="sm:text-3xl text-[#ffffff]">GJ is a</p>
          <h1 className="text-4xl sm:text-3xl text-[#c470db]">
            Senior Fraud Analyst
          </h1>
        </div>
        <div>
          <h1 className="sm:text-3xl text-[#ffffff]">and</h1>
          <h1 className="text-4xl sm:text-3xl text-[#c470db]">
            a Cyber Security enthusiast
          </h1>
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
    </div>
  );
};

export default Home;
