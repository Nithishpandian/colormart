import React, { useEffect, useRef } from "react";
import playIcon from "../../assets/icons/play_btn.png";
import { motion } from "framer-motion";
import { animationVariantHero } from "./animations/homeAnimations";
import video from "../../assets/videos/colormart_video_1.mp4";
import posterImg from "../../assets/images/home/poster.png";

const HeroSection = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
    vidRef.current.muted = false;
  }, []);

  return (
    <motion.div
      variants={animationVariantHero}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className="flex flex-col items-center justify-center gap-6 mx-4 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-24 my-10 rounded-2xl"
    >
      <video
        className=" rounded-xl focus:outline-none min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[650px] shadow"
        // poster={posterImg}
        controls
        autoPlay={true}
        ref={vidRef}
        muted
        width="100%"
      >
        <source src={video} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      {/* </div> */}
    </motion.div>
  );
};

export default HeroSection;
