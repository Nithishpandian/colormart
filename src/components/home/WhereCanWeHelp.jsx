import React, { useState } from "react";
import WhereCanWeHelpCard from "./WhereCanWeHelpCard";
import { motion } from "framer-motion";
import {
  animationVariantCards,
  animationvariantWhereCanWeHelp,
} from "./animations/homeAnimations";

const WhereCanWeHelp = () => {
  const [card, setCard] = useState([1, 2, 3, 4, 5]);
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
        className=" flex flex-col gap-2  text-center"
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
      <div className=" flex justify-start items-center gap-8 sm:gap-5 md:gap-8 lg:gap-8 my-10 px-4 sm:px-0 md:px-16 lg:px-0 overflow-x-auto overflow-y-hidden" id="card">
        {card.map((card, index) => (
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
            <WhereCanWeHelpCard key={card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhereCanWeHelp;
