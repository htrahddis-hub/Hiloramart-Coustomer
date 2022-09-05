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


  const [category, setCategory] = useState({
    name: "",
    id: "",
  });


  const fetchdata = async () => {

    try {



      const res = await axios.get(`https://hiloramart0.herokuapp.com/product/getProductCategory`)


      setAllCategory(res.data.data)

    } catch (err) {
      console.log(err);
    }
  }


  const getCategoryData = async () => {

    
  const catid = String(category.id)
  // const arr = [catid]
  // console.log("Arr",arr)

  console.log("catid:",catid)


 

    const body = {

      category: [`${category.id}`]
    }


    try {
      const res = await axios.post(`https://hiloramart0.herokuapp.com/product/getProductsbyCategoryId`, body)

      console.log(res);

    } catch (error) {

      console.log(error)

    }


  }

  const handleCategory = (item) => {
    console.log(item)
  
    setCategory({
      name: item.name,
      id: item._id,
    });
    setIsDropDown(false);

    getCategoryData();

    // console.log(e);
  };



  console.log(category.name)
  console.log(category.id)

  useEffect(() => {


    fetchdata();

  }, [])

  return (
    <div className="sales-cont">
      <div className="topbar">
        <div style={{ textAlign: 'center' }}>MY SALE</div>

        <div className="category-div-cont" style={{ float: "left", width: "20%" }} >

          <div
            className="VinputBox cat-div " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            onClick={() => setIsDropDown(!isDropdown)}
          >
            {category.name ? category.name : "Category"}
          </div>

          {isDropdown && (
            <div className="category-list">
              {allCategory?.map((item, index) => {
                return (
                  <div
                    id={item._id}
                    className="cat-li"
                    onClick={(item)=>handleCategory(item)}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}




        </div>
        <div >

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
