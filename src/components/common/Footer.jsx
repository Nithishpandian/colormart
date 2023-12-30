import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { animationVariantFooter } from "./animations/CommonAnimations";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      variants={animationVariantFooter}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className=" border-t border-t-stone-200 bg-dark-blue py-4 px-4 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col sm:flex-row items-center justify-between"
    >
      <p className=" text-stone-300 font-noto-sans text-sm sm:text-base">
        © Copyright 2023. Designed by Soundar Rajan
      </p>
      <div className=" flex items-center gap-2 text-stone-300 mt-3">
        <div className=" border border-stone-200 p-1 rounded-full hover:opacity-70 duration-300 cursor-pointer">
          <FiFacebook />
        </div>
        <div className=" border border-stone-200 p-1 rounded-full hover:opacity-70 duration-300 cursor-pointer">
          <FiTwitter />
        </div>
        <div className=" border border-stone-200 p-1 rounded-full hover:opacity-70 duration-300 cursor-pointer">
          <LuLinkedin />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
