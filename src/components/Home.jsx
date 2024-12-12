import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Hero from "../assets/hero.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logooutline from "../assets/logo-outline.svg";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="w-full min-h-screen">
      {/* Container */}
      <div className="min-h-screen h-full justify-center flex flex-col md:flex-row gap-y-6">
        <div className="flex flex-col justify-center">
          <div>
            <span className="text-4xl sm:text-3xl text-gray-300">
              I am a&nbsp;
            </span>
            <span className="text-4xl sm:text-3xl text-[#c470db]">
              Fraud Analyst&nbsp;
            </span>
            <span className="text-4xl sm:text-3xl text-gray-300">
              and&nbsp;
            </span>
            <span className="text-4xl sm:text-3xl text-[#c470db]">
              Cyber Security enthusiast
            </span>
          </div>
          <p className="text-gray-300 py-4 max-w-[700px] leading-loose">
            I prevent and investigate fraud.
          </p>
          <div>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              <button className="text-gray-300 group border-2 px-6 py-3 my-2 flex items-center border-[#c470db] hover:bg-[rgba(196,112,219,0.15)] hover:border-[#c470db]">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-7/12 lg:flex flex-col justify-center">
          <img
            className="absolute top-16 left-4 md:top-64 md:left-0 h-16 w-16 md:h-24 md:w-24"
            src={Logooutline}
          />
          <img
            className="border-b-2 border-[#c470db] h-full w-full md:h-auto md:w-auto"
            src={Hero}
            alt="Hero"
          />
          <div className="border flex items-center mx-12 md:mx-22 gap-4 py-2 px-4">
            <a
              className="text-gray-300"
              href="https://drive.google.com/file/d/1zaYvf5n7hoyBsOVlD_SZx4syfgKQLKnE/view?usp=share_link"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
            <p className="text-gray-300">&lt;&lt;&lt; Click for resume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
