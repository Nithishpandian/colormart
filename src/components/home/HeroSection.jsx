import React from "react";
import playIcon from "../../assets/icons/play_btn.png";
import { motion } from "framer-motion";
import { animationVariantHero } from "./animations/homeAnimations";
import video from "../../assets/videos/colormart_video_1.mp4"
import posterImg from "../../assets/images/home/poster.png"

const HeroSection = () => {
  return (
    <motion.div
      variants={animationVariantHero}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className="flex flex-col items-center justify-center gap-6 mx-4 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-24 my-10 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-5 sm:px-4 md:px-8 lg:px-10 xl:px-16 bg-primary-blue rounded-2xl"
    >
      {/* <div className=" flex flex-col justify-center items-center gap-3">
        <h1 className=" text-center text-stone-100 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-noto-sans">
          Tired of lengthy colour process ?
        </h1>
        <p className=" text-stone-100 text-base sm:text-lg lg:text-xl font-medium">
          See the introduction video
        </p>
      </div>
      <div>
        <div className=" bg-[#fcfcfcec] hover:bg-white duration-300 py-[18px] sm:py-[14px] pl-6 md:pr-1 rounded-full cursor-pointer">
          <img
            className=" w-[50%] sm:w-[60%] md:w-[65%] lg:w-[75%]"
            src={playIcon}
            alt=""
          />
        </div> */}
        <video
        className=" rounded-xl focus:outline-none"
        // poster={posterImg}
        controls 
        width="100%">
          <source src={video} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      {/* </div> */}
    </motion.div>
  );
};

export default HeroSection;
