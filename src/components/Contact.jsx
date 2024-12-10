import React from "react";
import Hashtag from "./Hashtag";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/263c8ecb-5033-438a-af77-1c597ddd63f6"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#c470db] text-gray-300">
            <Hashtag />
            contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - gjjrpineda@gmail.com
          </p>
        </div>
        <input
          className="bg-[#FFFFFF] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#FFFFFF]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#FFFFFF] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 border-[#c470db] hover:bg-[rgba(196,112,219,0.15)] hover:border-[#c470db] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
