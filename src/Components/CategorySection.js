import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { GET_ALL_CATEGORY } from "../Context/Types";
import "../Styles/Components/CategorySection.css";

function CategorySection() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [allCategory, setAllCategory] = useState();
  useEffect(() => {
    dispatch({ type: GET_ALL_CATEGORY, upDateState: setAllCategory });
  }, []);

  const handleClick = (id, name) => {
    navigate("/categoryproducts", {
      state: {
        id: id,
        name: name,
      },
    });
  };
  return (
    <div className="cat-cont">
      {allCategory?.map((item, index) => {
        return (
          <div
            className="cat-li-cont"
            onClick={() => handleClick(item._id, item.name)}
          >
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
