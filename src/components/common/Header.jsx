import React from "react";
import colormartLogo from "../../assets/images/common/colormart_logo.png";
import { motion } from "framer-motion";
import { animationVariantHeader } from "./animations/CommonAnimations";

const Header = () => {
  return (
    <motion.div
      id="header"
      variants={animationVariantHeader}
      initial="initial"
      animate="animate"
      className=" flex justify-between items-center py-4 px-8 sm:px-10 md:px-8 lg:px-14 xl:px-20"
    >
      <div>
        <img className=" w-[75%]" src={colormartLogo} alt="" />
      </div>
      <div className=" flex items-center gap-5 lg:gap-8 text-dark-blue text-lg">
        <a
          href="#who-we-are"
          className={`hidden md:flex hover:opacity-70 duration-300 cursor-pointer font-noto-sans`}
        >
          Who we are ?
        </a>
        <a
          href="#where-we-can-help"
          className={`hidden md:flex hover:opacity-70 duration-300 cursor-pointer font-noto-sans`}
        >
          Where we can help ?
        </a>
        <a href="#contact" className="group/button overflow-hidden relative font-medium py-1.5 px-4 rounded text-white bg-primary-blue cursor-pointer">
          <div className="duration-300 group-hover/button:-translate-y-8">
            Contact us
          </div>
          <div className="absolute invisible duration-300  group-hover/button:-translate-y-7 group-hover/button:visible">
            Contact us
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default Header;
