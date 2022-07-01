import React from 'react';
import Footer from '../../Components/Footer';
import AddProduct from '../../VendorsComponents/AddProduct';
import VLandingBanner1 from '../../VendorsComponents/VLandingBanner1';
import VLandingBanner2 from '../../VendorsComponents/VLandingBanner2';
import VNavBar from '../../VendorsComponents/VNavBar';

const VHome = () => {
  return (
    <div>
      <VNavBar />
      <VLandingBanner1 />
      <VLandingBanner2 />
      <AddProduct />
      <Footer />
    </div>
  );
};

export default VHome;
