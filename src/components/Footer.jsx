import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#192841]">
      <ul className="md:hidden list-none flex justify-evenly p-4 border-t  border-[#D3D3D3] text-[#FFFFFF]">
        <li className="p-0">
          <a href="https://linkedin.com/in/gj-pineda">Linkedin</a>
        </li>
        <li className="p-0">
          <a href="https://github.com/gjjrpin">Github</a>
        </li>
        <li className="p-0">
          <a href="mailto:gjjrpineda@gmail.com">Email</a>
        </li>
        <li className="p-0">
          <a href="https://drive.google.com/file/d/1zaYvf5n7hoyBsOVlD_SZx4syfgKQLKnE/view?usp=share_link">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
