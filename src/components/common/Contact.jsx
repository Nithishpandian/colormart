import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  animateVariantContactMessage,
  animationVariantContactInfo,
} from "./animations/CommonAnimations";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, phone, emailId, message);
  };

  return (
    <div
      className="grid md:grid-cols-2 gap-10 md:gap-1 lg:gap-12 xl:gap-20 pb-14 sm:py-20 px-3 min-[450px]:px-8 sm:px-16 md:px-3 lg:px-16 xl:px-32 2xl:px-44 mb-10"
      id="contact"
    >
      <motion.div
        variants={animationVariantContactInfo}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" flex flex-col gap-6 lg:gap-12 pt-10 pr-5 lg:pr-12 pb-1"
      >
        <div className=" flex flex-col gap-1 lg:gap-2">
          <h1 className=" font-extrabold text-3xl sm:text-4xl font-noto-sans text-dark-blue">
            Get a free quote
          </h1>
          <p className=" 2xl:text-lg text-stone-500 ">
            Protect your awesome family
          </p>
        </div>
        <div className=" flex flex-col gap-1 lg:gap-2">
          <h1 className=" font-bold font-noto-sans text-3xl text-dark-blue">
            Talk to an expert
          </h1>
          <div className=" flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 md:gap-2 lg:gap-4">
            <p className=" flex items-center gap-2 md:gap-1 lg:gap-2 text-stone-500 text-sm xl:text-base">
              <MdOutlinePhoneInTalk className=" text-dark-blue text-xl" />
              <p>098 76 54 321</p>
            </p>
            <p className=" flex items-center gap-2 md:gap-1 lg:gap-2 text-stone-500 text-sm xl:text-base">
              <FiMessageSquare className=" text-dark-blue text-xl" />
              <p>support@colormartsoftware.com</p>
            </p>
          </div>
        </div>
      </motion.div>
      <motion.form
        variants={animateVariantContactMessage}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" flex flex-col gap-5 font-roboto text-stone-500 xl:text-lg 2xl:text-xl"
        onSubmit={onSubmit}
      >
        <div className=" flex flex-col">
          <label htmlFor="">Name *</label>
          <input
            type="text"
            placeholder="Your name"
            className=" px-3 py-3 focus:outline-none bg-stone-100 rounded"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Mobile no *</label>
          <input
            type="number"
            placeholder="Your mobile number"
            className=" px-3 py-3 focus:outline-none bg-stone-100 rounded"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Your email *</label>
          <input
            type="email"
            placeholder="Your email address"
            className=" px-3 py-3 focus:outline-none bg-stone-100 rounded"
            onChange={(e) => setEmailId(e.target.value)}
            value={emailId}
            required
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Message *</label>
          <textarea
            rows="3"
            placeholder="Enter your message"
            className=" px-3 py-3 focus:outline-none bg-stone-100 rounded"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className=" bg-dark-blue hover:bg-[#0e1a35] duration-300 py-3 px-10 font-semibold font-noto-sans text-[#fafafa] rounded"
        >
          Get a quote
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
