import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Hashtag from "./Hashtag";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed top-0 left-0 md:left-auto z-50 w-screen max-w-[1100px] mx-auto bg-[#282c33] h-[80px] flex justify-between items-center text-gray-300">
      <Link to="home" smooth={true} duration={500}>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "32px" }}
          className=" cursor-pointer m-4 md:m-0"
        />
      </Link>
      {/* menu */}
      <ul className="hidden lg:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-[#c470db]"
          >
            <Hashtag />
            home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-[#c470db]"
          >
            <Hashtag />
            about
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-[#c470db]"
          >
            <Hashtag />
            skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-[#c470db]"
          >
            <Hashtag />
            work
          </Link>
        </li>
        <li>
          <a href="/blog" className="py-2 hover:border-b-2 border-[#c470db]">
            <Hashtag />
            blog
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="lg:hidden z-10 cursor-pointer pr-4">
        {!nav ? <FaBars size={28} /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#282c33] flex flex-col justify-between"
        }
      >
        <ul className="flex flex-col pt-16">
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              <Hashtag />
              home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              <Hashtag />
              about
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              <Hashtag />
              skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              <Hashtag />
              work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="blog" smooth={true} duration={500}>
              <Hashtag />
              blog
            </Link>
          </li>
        </ul>
        <ul className="list-none flex justify-evenly p-4  text-[#FFFFFF]">
          <li className="p-0">
            <a href="https://linkedin.com/in/gj-pineda">
              <FaLinkedin size={32} />
            </a>
          </li>
          <li className="p-0">
            <a href="https://github.com/gjjrpin">
              <FaGithub size={32} />
            </a>
          </li>
          <li className="p-0">
            <a href="mailto:gjjrpineda@gmail.com">
              <HiOutlineMail size={32} />
            </a>
          </li>
        </ul>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col left-0">
        <ul className="flex flex-col items-center">
          <span class="block h-[700px] w-[1px] bg-gray-300 mx-2"></span>
          <li className="h-[60px] flex justify-between items-center bg-[#282c33]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/in/gj-pineda"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="h-[60px] flex justify-between items-center bg-[#282c33]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/gjjrpin"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="h-[60px] flex justify-between items-center bg-[#282c33]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:gjjrpineda@gmail.com"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
