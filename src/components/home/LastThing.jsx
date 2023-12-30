import React from "react";
import { motion } from "framer-motion";
import { animationVariantLastThing } from "./animations/homeAnimations";

const LastThing = () => {
  return (
    <motion.div
      variants={animationVariantLastThing}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className=" grid grid-cols-1 lg:grid-cols-4 lg:items-center justify-between gap-5 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-10 2xl:gap-16 my-6 md:my-8 lg:my-12 py-20 px-4 sm:px-10 md:px-12 lg:px-6 2xl:px-28 bg-navy-blue"
    >
      <h1 className=" flex lg:justify-center text-4xl xl:text-5xl font-semibold">
        <div className=" flex flex-col lg:justify-start items-start gap-2">
          <p className=" text-white">One Last </p>
          <p className=" text-primary-blue">Last Thing</p>
        </div>
      </h1>
      <p className=" lg:col-span-2 text-stone-300 text-base xl:text-lg">
        Yes we also run the yarn business at colourmart.com. It came out of a
        building a color system for a cashmere spinner, and is now a very
        successful little business in its own right... but it doesn't build
        color systems.
      </p>
      <div className=" flex lg:justify-center items-center">
        <a href="#contact" className=" border border-white bg-white text-dark-blue hover:bg-navy-blue hover:text-white duration-300 font-medium rounded py-1.5 px-4">
          Contact us
        </a>
      </div>
    </motion.div>
  );
};

export default LastThing;
