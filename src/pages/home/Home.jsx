import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Header from "../../components/common/Header";
import HeroSection from "../../components/home/HeroSection";
import WhoWeAre from "../../components/home/WhoWeAre";
import WhereCanWeHelp from "../../components/home/WhereCanWeHelp";
import LastThing from "../../components/home/LastThing";
import Contact from "../../components/common/Contact";
import Footer from "../../components/common/Footer";

const Home = () => {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return (
    <div className=" relative">
      <div>
        <Header />
        <HeroSection />
        <div ref={ref}>
        <WhoWeAre />
        </div>
        <WhereCanWeHelp />
        <LastThing />
        <Contact />
        <Footer />
      </div>
      <div className=" fixed bottom-5 right-5">
        <a href="#header" className={`${isIntersecting ? "flex" : "hidden"}`}>
          <button className=" bg-dark-blue text-white hover:bg-primary-blue duration-300 rounded-full p-3 cursor-pointer">
            <FaArrowUp className=" text-xl" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
