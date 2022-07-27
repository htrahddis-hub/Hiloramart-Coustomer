import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { GET_ALL_CATEGORY } from "../Context/Types";
import "../Styles/Components/CategorySection.css";

function CategorySection() {
  const { dispatch } = useContext(AuthContext);
  const [allCategory, setAllCategory] = useState();
  useEffect(() => {
    dispatch({ type: GET_ALL_CATEGORY, upDateState: setAllCategory });
  }, []);
  return (
    <div className="cat-cont">
      {allCategory?.map((item, index) => {
        return (
          <div className="cat-li-cont">
            <div>
              <img src={item.image} className="cat-image" />
            </div>
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CategorySection;
