import React from 'react';
import Base from '../Assets/Images/affiliate/Base.png';
import Detectors from '../Components/HomeComponents/Detectors';
import GroundSurveyEquipments from '../Components/Affiliate/GroundSurveyEquipments';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Affiliate = () => {
  return (
    <div>
      <NavBar />
      <div
        className='AFcont1'
        style={{
          textAlign: 'center',
        }}
      >
        <img src={Base} alt='' />
      </div>
      <Detectors />
      <GroundSurveyEquipments />
      <Footer />
    </div>
  );
};

export default Affiliate;
