import React from "react";
import LandingPageBanner from "../Components/HomeComponents/LandingPageBanner";
import DealOfDayContainer from "../Components/HomeComponents/DealOfDayContainer";
import Detectors from "../Components/HomeComponents/Detectors";
import Footer from "../Components/Footer";
import CategorySection from "../Components/CategorySection";
// import SearchInput from "../Components/SearchInput";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="">
        {/* <div className="search-cont">
          <SearchInput />
        </div> */}
        <LandingPageBanner />
        <CategorySection />
        {/* <DealOfDayContainer /> */}
        <Detectors />
        <Footer />
      </div>
    </>
  );
};

export default Home;