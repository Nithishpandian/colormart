import React from "react";
// import whoWeAre from "../../assets/images/home/who_we_are.png";
import { motion } from "framer-motion";
import {
  animationVariantWhoWeAre1,
  animationVariantWhoWeAre2,
} from "./animations/homeAnimations";
import whoWeAre from "../../assets/images/home/whoWeAre.jpg"

const WhoWeAre = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 lg:gap-8 2xl:gap-16 px-3 md:px-4 lg:px-16 xl:px-24 py-10 md:py-6" id="who-we-are">
      <motion.img
        variants={animationVariantWhoWeAre1}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" w-[400px] rounded-md"
        src={whoWeAre}
        alt=""
      />
      <motion.div
        variants={animationVariantWhoWeAre2}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" flex flex-col gap-2 lg:gap-3 xl:gap-6 md:py-10 px-2 sm:px-20 md:px-2"
      >
        <h1 className=" text-dark-blue text-3xl md:text-4xl xl:text-5xl font-bold font-noto-sans">
          Who we are ?
        </h1>
        <p className=" text-[#142752cc] text-sm sm:text-base lg:text-lg xl:leading-8 md:pl-1 lg:pl-2 md:pr-2 lg:pr-4 font-roboto">
          For nearly 20 years now Colourmart has been working with Color
          Solutions International (CSI) to deliver to CSI's customers the world
          class online systems they need to manage their supply chain color
          processes. This work continues, with new customers and new projects
          being added all the time, but Colourmart also offers such systems
          direct to anyone who wishes to manage their existing color libraries,
          new and ongoing palettes, lab dip submissions, bulk production,
          customer color search, or indeed any other part of their color flows,
          better than they do it now (which usually means better than with a
          collection of spreadsheets and emails...) ... could that be you?
        </p>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
