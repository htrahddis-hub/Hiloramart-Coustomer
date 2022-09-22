import React, { useState } from "react";
import LandingPageBanner from "../Components/HomeComponents/LandingPageBanner";
import DealOfDayContainer from "../Components/HomeComponents/DealOfDayContainer";
import Detectors from "../Components/HomeComponents/Detectors";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import CategorySection from "../Components/CategorySection";
import SearchInput from "../Components/SearchInput";
import "./Home.css";

const Home = () => {
  // const { AuthRole } = useContext(AuthContext);
  // const { dispatch } = useContext(AuthContext);
  const [allOrders, setAllOrders] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  console.log(allOrders);

  return (
    <>
      <div className="">
        <div className="search-cont">
          <SearchInput />
        </div>
        <LandingPageBanner />
        <CategorySection />
        <DealOfDayContainer />
        <Detectors />
        <Footer />
      </div>
    </>
  );
};

export default Home;