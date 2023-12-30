import React from "react";
import Header from "../../components/common/Header";
import HeroSection from "../../components/home/HeroSection";
import WhoWeAre from "../../components/home/WhoWeAre";
import WhereCanWeHelp from "../../components/home/WhereCanWeHelp";
import LastThing from "../../components/home/LastThing";
import Contact from "../../components/common/Contact";
import Footer from "../../components/common/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <WhereCanWeHelp />
      <LastThing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
