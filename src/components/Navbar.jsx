import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#282c33] text-gray-300">
      <Link to="home" smooth={true} duration={500}>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "60px" }}
          className="cursor-pointer"
        />
      </Link>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="/" className="py-2 hover:border-b-2 border-[#c470db]">
            Home
          </a>

          {/* <Link
            to="home"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-[#D49902]"
          >
            Home
          </Link> */}
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
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-[#c470db]"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-[#c470db]"
          >
            Contact
          </Link>
        </li>
        <li>
          <a href="/blog" className="py-2 hover:border-b-2 border-[#c470db]">
            Blog
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#282c33] flex flex-col justify-center items-center"
        }
      >
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
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
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
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
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

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#282c33]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/in/gj-pineda"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#282c33]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/gjjrpin"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#282c33]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:gjjrpineda@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#282c33]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1zaYvf5n7hoyBsOVlD_SZx4syfgKQLKnE/view?usp=share_link"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
