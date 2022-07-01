import React from 'react'
import NavBar from '../Components/NavBar'
import LandingPageBanner from '../Components/HomeComponents/LandingPageBanner'
import DealOfDayContainer from '../Components/HomeComponents/DealOfDayContainer'
import MostSellingProductContainer from '../Components/HomeComponents/MostSellingProductContainer'
import Detectors from '../Components/HomeComponents/Detectors'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <div>
        <NavBar/>
        <LandingPageBanner/>
        <DealOfDayContainer/>
     <MostSellingProductContainer/>
     <Detectors/>
     <Footer/>
      </div>
    </>
  )
}

export default Home