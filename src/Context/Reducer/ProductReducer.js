import { addProductRequest, getAllCategoryRequest } from "../API";

export const getALlCategory = async (upDateState) => {
  try {
    const res = await getAllCategoryRequest();
    upDateState(res.data.data);
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = async (
  inputData,
  urlResponse,
  catId,
  setIsLoading,
  resetform
) => {
  try {
    const values = {
      name: inputData.productName,
      description: inputData.prodcutDescription,
      price: inputData.price,
      productImage: urlResponse.slice(0, -1),
      productVideos: urlResponse.slice(-1),
      owner: inputData.id,
      category: catId,
    };
    const res = await addProductRequest(values);
    if (res.data.success) {
      alert("product added successfully");
      resetform();
    }
  } catch (err) {
    console.log(err);
    alert("some error occured");
  } finally {
    setIsLoading(false);
  }
};
