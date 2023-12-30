import React, { useEffect, useRef, useState } from "react";
import playIcon from "../../assets/icons/play_btn.png";
import { motion } from "framer-motion";
import { animationVariantHero } from "./animations/homeAnimations";
import video from "../../assets/videos/colormart_video_1.mp4";
import posterImg from "../../assets/images/home/poster.png";

const HeroSection = () => {
  const vidRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying === true) {
      vidRef.current.play();
    }
  }, [isPlaying]);

  return (
    <motion.div
      variants={animationVariantHero}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className=" relative flex flex-col items-center justify-center gap-6 mx-4 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-24 my-10 rounded-2xl"
    >
      <video
        className=" rounded-xl focus:outline-none min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[650px] shadow"
        // poster={posterImg}
        controls
        width="100%"
        ref={vidRef}
      >
        <source src={video} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <div
        className={` absolute top-0 bottom-0 left-0 right-0 bg-primary-blue ${
          isPlaying ? "invisible opacity-0" : "visible opacity-100"
        } rounded-2xl py-20 px-10 duration-300`}
      >
        <div className=" flex flex-col items-center justify-center h-full">
          <div className=" flex flex-col justify-center items-center gap-5">
            <h1 className=" text-center text-stone-100 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-noto-sans">
              Tired of lengthy colour process ?
            </h1>
            <p className=" text-stone-100 text-base sm:text-lg lg:text-xl font-medium">
              See the introduction video
            </p>
          </div>
          <div className=" flex justify-center items-center mt-5">
            <button
              className=" flex items-center justify-center gap-2 bg-stone-100 rounded-full py-[10px] pl-5 pr-2 focus:outline-none"
              onClick={() => setIsPlaying(true)}
            >
              <img className=" w-[90%] h-[90%]" src={playIcon} alt="play icon" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
