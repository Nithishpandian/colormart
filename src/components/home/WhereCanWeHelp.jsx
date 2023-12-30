import React, { useEffect, useState } from "react";
import WhereCanWeHelpCard from "./WhereCanWeHelpCard";
import { motion } from "framer-motion";
import {
  animationVariantCards,
  animationvariantWhereCanWeHelp,
} from "./animations/homeAnimations";
import { WhereCanWeHelpData } from "../../data/whereCanWeHelpData";
import Marquee from "react-fast-marquee";

const WhereCanWeHelp = () => {
  const [screenWidth, setScreenWidth] = useState();
  const screenWidthFunc = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", screenWidthFunc);
    return () => {
      window.removeEventListener("resize", screenWidthFunc);
    };
  }, []);

  return (
    <div className=" my-4 sm:my-6 md:my-10 lg:my-12 xl:my-20 2xl:my-24 px-3 md:px-4 lg:px-16 xl:px-32 py-10 md:py-6">
      <motion.div
        id="where-we-can-help"
        variants={animationvariantWhereCanWeHelp}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" flex flex-col gap-2 text-center"
      >
        <h1 className=" font-noto-sans font-bold text-dark-blue text-2xl sm:text-3xl lg:text-4xl">
          Where can we help ?
        </h1>
        <p className=" text-navy-blue text-sm md:text-base xl:text-lg font-roboto">
          In general, we can assist with any process flow where accurately
          measured or matched color is a key element, but the systems we have
          built so far tend to include one or more of the following modules...
        </p>
      </motion.div>
      <div
        className=" flex flex-col md:flex-row justify-center md:justify-start items-center gap-8 sm:gap-5 md:gap-8 lg:gap-8 my-10 px-4 sm:px-0 md:px-16 lg:px-0 md:overflow-x-auto overflow-y-hidden"
        id="card"
      >
        {WhereCanWeHelpData.map((item, index) => (
          <motion.div
            key={index}
            variants={animationVariantCards}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <WhereCanWeHelpCard
              key={item}
              heading={item.heading}
              content={item.content}
              image={item.image}
              screenshot={item.screenshot}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhereCanWeHelp;
