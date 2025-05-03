import Banner from "@/components/shared/Banner/Banner";
import ChooseUs from "@/components/shared/ChooseUs/ChooseUs";
import CoverageMapSection from "@/components/shared/CoverageMapSection/CoverageMapSection";
import Faq from "@/components/shared/Faq/Faq";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <CoverageMapSection></CoverageMapSection>
      <Faq></Faq>
    </div>
  );
};

export default HomePage;
