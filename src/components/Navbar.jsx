import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Hashtag from "./Hashtag";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-50 w-screen max-w-[1100px] mx-auto bg-[#282c33] h-[80px] flex justify-between items-center text-gray-300">
      <Link to="home" smooth={true} duration={500}>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "60px" }}
          className=" cursor-pointer"
        />
      </Link>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          {/* <a href="/" className="py-2 hover:border-b-2 border-[#c470db]">
            <Hashtag />
            home
          </a> */}

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
        {/* <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-[#D49902]"
          >
            About
          </Link>
        </li> */}
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
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-[#c470db]"
          >
            <Hashtag />
            contact
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
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
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
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
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
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="blog" smooth={true} duration={500}>
              Blog
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
          <li className="p-0">
            <a href="https://drive.google.com/file/d/1zaYvf5n7hoyBsOVlD_SZx4syfgKQLKnE/view?usp=share_link">
              <BsFillPersonLinesFill size={32} />
            </a>
          </li>
        </ul>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col left-0">
        <ul className="flex flex-col items-center">
          <span class="block h-[700px] w-[1px] bg-[#FFFFFF] mx-2"></span>
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
          <li className="h-[60px] flex justify-between items-center bg-[#282c33]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1zaYvf5n7hoyBsOVlD_SZx4syfgKQLKnE/view?usp=share_link"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
