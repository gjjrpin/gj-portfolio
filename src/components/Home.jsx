import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Hero from "../assets/hero.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logooutline from "../assets/logo-outline.svg";
import Dots from "../assets/dots.png";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div id="home" name="home" className="w-full min-h-screen pt-32 sm:pt-0">
      {/* Container */}
      <div className="min-h-screen h-full justify-center sm:flex flex-col md:flex-row gap-y-6">
        <div className="flex flex-col justify-center">
          <div>
            <span className="text-[1.5rem] sm:text-3xl text-gray-300">
              I am a&nbsp;
            </span>
            <span className="text-[1.5rem] sm:text-3xl text-[#c470db]">
              Fraud Analyst&nbsp;
            </span>
            <span className="text-[1.5rem] sm:text-3xl text-gray-300">
              and&nbsp;
            </span>
            <span className="text-[1.5rem] sm:text-3xl text-[#c470db]">
              Cyber Security enthusiast
            </span>
          </div>
          <p className="text-gray-300 py-4 max-w-[700px] leading-loose">
            I prevent and investigate fraud.
          </p>
          <div>
            <Link onClick={handleClick} to="work" smooth={true} duration={100}>
              <button className="text-gray-300 group border-2 px-6 py-3 my-2 flex items-center border-[#c470db] hover:bg-[rgba(196,112,219,0.15)] hover:border-[#c470db]">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-7/12 lg:flex flex-col content-center justify-center">
          <img
            className="absolute top-16 left-4 md:top-64 md:left-0 h-16 w-16 md:h-24 md:w-24"
            src={Logooutline}
            alt="Logooutline"
          />
          <img
            className="absolute top-16 right-0 md:top-64 h-20 w-20 md:h-24 md:w-24"
            src={Dots}
            alt="Dots"
          />
          <img
            className="border-b-2 border-[#c470db] h-full w-full md:h-auto md:w-auto"
            src={Hero}
            alt="Hero"
          />
          <div className="justify-center border flex items-center mx-12 md:mx-22 gap-4 py-2 ">
            <a
              className="text-gray-300 flex gap-2"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1Kw_8Ow0BviCni7-0ysp7WZ6ywc5v2ZQY/view"
            >
              <BsFillPersonLinesFill size={30} />
              <p className="text-gray-300">&lt;&lt;&lt; Click for resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
