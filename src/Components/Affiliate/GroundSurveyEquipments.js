
import React from 'react'
import ProductContainer2 from '../HomeComponents/ProductContainer2'
import  '../../Styles/Components/MostSellingProductContainer.css'

const GroundSurveyEquipments = () => {
  return (
    <>
        <div className="MSPmainContainer">
            <div className="MSPcontiner1">Ground Survey Equipments</div>
            <div className="MSPCont2">
                <ProductContainer2/>
                <ProductContainer2/>
                <ProductContainer2/>
                <ProductContainer2/>
            </div>
        </div>
    </>
  )
}

export default GroundSurveyEquipments