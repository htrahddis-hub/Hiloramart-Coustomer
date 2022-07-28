import "../../Styles/Components/ProductContainer.css";
function ProductContainerSkeleton() {
  return (
    <div className="ProductMainContainer">
      <div className="ProCont1">
        <div className="ProHead skeleton line w-50 h-20 rounded-4"></div>
        <div className="Stars skeleton line w-30 h-20 rounded-4"></div>
      </div>
      <div className="Images">
        <div
          className="skeleton image-div"
          style={{ height: "8rem", width: "8rem" }}
        />
      </div>
      <div className="discription skeleton line rounded-2"></div>
      <div className="price skeleton line w-30 h-20 rounded-2"></div>
    </div>
  );
}

export default ProductContainerSkeleton;
