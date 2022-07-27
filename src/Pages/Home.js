import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import LandingPageBanner from "../Components/HomeComponents/LandingPageBanner";
import DealOfDayContainer from "../Components/HomeComponents/DealOfDayContainer";
import MostSellingProductContainer from "../Components/HomeComponents/MostSellingProductContainer";
import Detectors from "../Components/HomeComponents/Detectors";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import AddProduct from "../VendorsComponents/AddProduct";

const Home = () => {
  const { AuthRole } = useContext(AuthContext);
  return (
    <>
      <div>
        <LandingPageBanner />
        {AuthRole === "user" ? (
          <>
            <DealOfDayContainer />
            {/* <MostSellingProductContainer /> */}
            <Detectors />
            <Detectors />
          </>
        ) : (
          <>
            <AddProduct />
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Home;
