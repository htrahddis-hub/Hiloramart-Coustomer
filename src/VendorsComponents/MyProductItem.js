import React, { useContext } from 'react'
import { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { PRODUCT_ADD_FOR_ADS, PRODUCT_REMOVE_FOR_ADS } from '../Context/Types';

const MyProductItem = ({item, setSelectedProducts, setTotalPrice, totalPrice, setProductIds}) => {

    const [isChecked, setIsChecked] = useState(false);
    const { dispatch } = useContext(AuthContext);

    

    const itemSelectorHandler = (e) => {
        const item = JSON.parse(e.target.value);
        if(e.target.name === item._id) {
            if(!isChecked) {
            setIsChecked(true);
            dispatch({
                type: PRODUCT_ADD_FOR_ADS,
                item,
                setSelectedProducts,
                setTotalPrice,
                totalPrice,
                setProductIds
            })
          }else {
            setIsChecked(false);
            dispatch({
                type: PRODUCT_REMOVE_FOR_ADS,
                item,
                setSelectedProducts,
                setTotalPrice,
                totalPrice,
                setProductIds
            })
          }
        }
      }


    


  return (
    <div className="CPCmain" style={{ background: "rgba(112,112,112,0.10)", cursor: 'pointer' }}>
    <div className="CPCmain">
    <div className="CPC1">
      <img style={{borderRadius: '8px'}} src={item?.productImage[0]} alt="" />
    </div>
    <div className="product-detail">
      <div className="CPCin1">{item?.name}</div>
      <div className="CPCin2">RS. {item?.price}</div>
      <p style={!item?.stock ? {color: 'red'} : {color: 'green'}}>Stock: {item?.stock ? item?.stock : '0'}</p>
      {/* <p style={!stock ? {color: 'red'} : {color: 'green'}}>Stock: 10</p> */}
    </div>
    </div>
    <div className="product-options">
      <div style={{background: "rgba(112,112,112,0.10)"}} className="remove-icon">
          <input onChange={itemSelectorHandler} value={JSON.stringify(item)} checked={isChecked} type="checkbox" name={item?._id} id="cehkc" />
      </div>
    </div>
  </div>
  )
}

export default MyProductItem;