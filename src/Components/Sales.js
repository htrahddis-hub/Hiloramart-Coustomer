import React, { useState } from "react";
import DownIcon from "../Assets/Images/DownIcon.png";
import "../Styles/Components/Sales.css";
import MySaleProduct from "./MySaleProduct";
import axios from "axios";
import { useEffect } from "react";
function Sales() {

  const dateChanger = (e) => {
    console.log(e.target.value);
  }

  const [isDropdown, setIsDropDown] = useState(false);

  const [allCategory, setAllCategory] = useState([]);


  const getAllCategories = async () => {
    try {
      const res = await axios.get(`https://hiloramart0.herokuapp.com/product/getProductCategory`);
      setAllCategory(res.data.data);
      console.log(res, "all category");
    } catch (err) {
      console.log(err);
    }
  }


  const getCategoryData = async (data) => {
    const body = {
      category: [data?._id]
    }
    try {
      const res = await axios.post(`https://hiloramart0.herokuapp.com/product/getProductsbyCategoryId`, body)
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }

  const handleCategory = (item) => {
    if(item.target.value.length === 0) {

    }else {
      const data = JSON.parse(item.target.value)
      getCategoryData(data);
    }
  };


  useEffect(() => {
    getAllCategories();
  }, [])

  return (
    <div className="sales-cont">
      <div className="topbar">
        <div style={{ textAlign: 'center' }}>MY SALE</div>

        <div className="category-div-cont" style={{ float: "left", width: "20%" }} >
          <select onChange={handleCategory} name="cateogory" id="category">
            <option value="">Select</option>
            {
              allCategory?.map((item) => (
                <option value={JSON.stringify(item)}>{item?.name}</option>
              ))
            }
          </select>
          <div className="filter">
            <input onChange={dateChanger} style={{ width: '100%' }} type="date" name="sale-date" id="sale-date" />
          </div>
        </div>
      </div>
      <div className="sale-product-parent">
        <MySaleProduct />
        <MySaleProduct />
        <MySaleProduct />
      </div>
    </div>
  );
}

export default Sales;
