import React, { useContext, useEffect, useState } from "react";
import "../VendorsStyle/AddProduct.css";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Container } from "react-bootstrap";
import { storage } from "../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { AuthContext } from "../Context/AuthContext";
import { ADD_PRODUCT, GET_ALL_CATEGORY } from "../Context/Types";

const AddProduct = () => {
  const { dispatch, currentUser } = useContext(AuthContext);
  const [isDropdown, setIsDropDown] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    id: "",
  });
  const [inputData, setInputData] = useState({
    brandName: "",
    productName: "",
    price: "",
    prodcutDescription: "",
  });
  const [allCategory, setAllCategory] = useState([]);
  const [file, setFile] = useState([]);
  const [videoFile, setVideoFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  let urlResponse = [];
  let videoUrlResponse = [];

  const handleInputChange = (e) => {
    setInputData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const fileHandle = (e) => {
    console.log(e);
    setFile((prev) => {
      return { ...prev, [e.target.name]: e.target.files[0] };
    });
  };

  const uploadMutlipleImage = async (item, index, arr) => {
    try {
      const fileRef = ref(storage, `products/images/${v4()}`);
      const res = await uploadBytes(fileRef, item);

      if (res.ref._location.path) {
        console.log("uploaded");
        const response = await getDownloadURL(fileRef);
        if (response) {
          urlResponse.push(response);
          if (index == arr.length - 1) {
            uploadVideo();
          }
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  const uploadFile = async (e) => {
    if (file.length === 0) return;
    Object.values(file).map((item, index, arr) => {
      uploadMutlipleImage(item, index, arr);
    });
  };

  const uploadVideo = async () => {
    if (!videoFile) {
      handleSubmit();
      return;
    }
    try {
      const fileRef = ref(storage, `products/video/${v4()}`);
      const res = await uploadBytes(fileRef, videoFile);

      if (res.ref._location.path) {
        console.log("uploaded video");
        const response = await getDownloadURL(fileRef);
        if (response) {
          videoUrlResponse.push(response);
          handleSubmit();
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  const resetform = () => {
    setCategory({
      name: "",
      id: "",
    });
    setInputData({
      brandName: "",
      productName: "",
      price: "",
      prodcutDescription: "",
    });
    setFile("");
    setVideoFile("");
    urlResponse = [];
  };
  const handleSubmit = async () => {
    inputData["id"] = currentUser.id;
    dispatch({
      type: ADD_PRODUCT,
      payload: inputData,
      urls: urlResponse,
      videoUrlResponse,
      catId: category.id,
      setIsLoading,
      resetform,
      navigate,
    });
  };

  const AddProductForm = (e) => {
    e.preventDefault();
    if (file.length == 0) {
      alert("Atleast one Image is required ");
      return;
    }
    setIsLoading(true);
    uploadFile();
  };

  //to get all  category
  useEffect(() => {
    dispatch({
      type: GET_ALL_CATEGORY,
      upDateState: setAllCategory,
      resetform,
    });
  }, []);

  const handleCat = (e) => {
    setCategory({
      name: e.target.innerText,
      id: e.target.catId,
    });
    setIsDropDown(false);
    // console.log(e);
  };

  return (
    <Container>
      <div className="VContainer1">
        <div className="Vhead">WANT TO ADD YOUR PRODUCTS</div>
        <div className="addProduct-container">
          <form onSubmit={AddProductForm}>
            <div className="category-div-cont">
              {/* <input
                type="text"
                placeholder="Categories"
                className="VinputBox"
              /> */}
              <div
                className="VinputBox cat-div"
                onClick={() => setIsDropDown(true)}
              >
                {category.name ? category.name : "Category"}
              </div>
              {isDropdown && (
                <div className="category-list">
                  {allCategory?.map((item, index) => {
                    return (
                      <div
                        data-cat-id={item._id}
                        className="cat-li"
                        onClick={handleCat}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Brand Name"
                className="VinputBox"
                name="brandName"
                value={inputData.brandName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Product Name"
                className="VinputBox"
                name="productName"
                value={inputData.productName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Price"
                className="VinputBox"
                name="price"
                value={inputData.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Product Description"
                className="VinputBox"
                name="prodcutDescription"
                value={inputData.prodcutDescription}
                onChange={handleInputChange}
              />
            </div>
            <div id="hide">
              <div className="VsmallInputCon">
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
                      {file.image1 ? (
                        <img
                          src={URL.createObjectURL(file.image1)}
                          className="uploadedImage-preview"
                        />
                      ) : (
                        <>
                          <div className="imagecont">Add Image</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                          >
                            <g data-name="Group 2480" opacity=".5">
                              <path
                                data-name="Rectangle 2949"
                                fill="none"
                                d="M0 0h35v35H0z"
                              />
                              <g data-name="Group 2479">
                                <path
                                  data-name="Path 984"
                                  d="M6 6h24v24H6Z"
                                  fill="none"
                                />
                                <path
                                  data-name="Path 985"
                                  d="M27 21v3h3v2h-3v3h-2v-3h-3v-2h3v-3Zm.008-12a.993.993 0 0 1 .992.993V19h-2v-8H10v14l10-10 3 3v2.829l-3-3L12.827 25H20v2H8.992A.993.993 0 0 1 8 26.007V9.993A1 1 0 0 1 8.992 9h18.016ZM14 13a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </>
                      )}
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                    name="image1"
                    onChange={fileHandle}
                  />
                </label>
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
                      {file.image2 ? (
                        <img
                          src={URL.createObjectURL(file.image2)}
                          className="uploadedImage-preview"
                        />
                      ) : (
                        <>
                          <div className="imagecont">Add Image</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                          >
                            <g data-name="Group 2480" opacity=".5">
                              <path
                                data-name="Rectangle 2949"
                                fill="none"
                                d="M0 0h35v35H0z"
                              />
                              <g data-name="Group 2479">
                                <path
                                  data-name="Path 984"
                                  d="M6 6h24v24H6Z"
                                  fill="none"
                                />
                                <path
                                  data-name="Path 985"
                                  d="M27 21v3h3v2h-3v3h-2v-3h-3v-2h3v-3Zm.008-12a.993.993 0 0 1 .992.993V19h-2v-8H10v14l10-10 3 3v2.829l-3-3L12.827 25H20v2H8.992A.993.993 0 0 1 8 26.007V9.993A1 1 0 0 1 8.992 9h18.016ZM14 13a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </>
                      )}
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                    name="image2"
                    onChange={fileHandle}
                  />
                </label>
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
                      {file.image3 ? (
                        <img
                          src={URL.createObjectURL(file.image3)}
                          className="uploadedImage-preview"
                        />
                      ) : (
                        <>
                          <div className="imagecont">Add Image</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                          >
                            <g data-name="Group 2480" opacity=".5">
                              <path
                                data-name="Rectangle 2949"
                                fill="none"
                                d="M0 0h35v35H0z"
                              />
                              <g data-name="Group 2479">
                                <path
                                  data-name="Path 984"
                                  d="M6 6h24v24H6Z"
                                  fill="none"
                                />
                                <path
                                  data-name="Path 985"
                                  d="M27 21v3h3v2h-3v3h-2v-3h-3v-2h3v-3Zm.008-12a.993.993 0 0 1 .992.993V19h-2v-8H10v14l10-10 3 3v2.829l-3-3L12.827 25H20v2H8.992A.993.993 0 0 1 8 26.007V9.993A1 1 0 0 1 8.992 9h18.016ZM14 13a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </>
                      )}
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                    name="image3"
                    onChange={fileHandle}
                  />
                </label>
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
                      {file.image4 ? (
                        <img
                          src={URL.createObjectURL(file.image4)}
                          className="uploadedImage-preview"
                        />
                      ) : (
                        <>
                          <div className="imagecont">Add Image</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                          >
                            <g data-name="Group 2480" opacity=".5">
                              <path
                                data-name="Rectangle 2949"
                                fill="none"
                                d="M0 0h35v35H0z"
                              />
                              <g data-name="Group 2479">
                                <path
                                  data-name="Path 984"
                                  d="M6 6h24v24H6Z"
                                  fill="none"
                                />
                                <path
                                  data-name="Path 985"
                                  d="M27 21v3h3v2h-3v3h-2v-3h-3v-2h3v-3Zm.008-12a.993.993 0 0 1 .992.993V19h-2v-8H10v14l10-10 3 3v2.829l-3-3L12.827 25H20v2H8.992A.993.993 0 0 1 8 26.007V9.993A1 1 0 0 1 8.992 9h18.016ZM14 13a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </>
                      )}
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                    name="image4"
                    onChange={fileHandle}
                  />
                </label>
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
                      {file.image5 ? (
                        <img
                          src={URL.createObjectURL(file.image5)}
                          className="uploadedImage-preview"
                        />
                      ) : (
                        <>
                          <div className="imagecont">Add Image</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                          >
                            <g data-name="Group 2480" opacity=".5">
                              <path
                                data-name="Rectangle 2949"
                                fill="none"
                                d="M0 0h35v35H0z"
                              />
                              <g data-name="Group 2479">
                                <path
                                  data-name="Path 984"
                                  d="M6 6h24v24H6Z"
                                  fill="none"
                                />
                                <path
                                  data-name="Path 985"
                                  d="M27 21v3h3v2h-3v3h-2v-3h-3v-2h3v-3Zm.008-12a.993.993 0 0 1 .992.993V19h-2v-8H10v14l10-10 3 3v2.829l-3-3L12.827 25H20v2H8.992A.993.993 0 0 1 8 26.007V9.993A1 1 0 0 1 8.992 9h18.016ZM14 13a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </>
                      )}
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                    name="image5"
                    onChange={fileHandle}
                  />
                </label>
              </div>
              {videoFile ? (
                <div className="video-preview">
                  <video
                    muted
                    playsInline
                    controls
                    src={URL.createObjectURL(videoFile)}
                  />
                </div>
              ) : (
                <label htmlFor="vid" className="VinputBox video-cont">
                  <div>Add Video</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g
                      id="Group_2477"
                      data-name="Group 2477"
                      transform="translate(-755 -2389)"
                      opacity="0.5"
                    >
                      <rect
                        id="Rectangle_2948"
                        data-name="Rectangle 2948"
                        width="40"
                        height="40"
                        transform="translate(755 2389)"
                        fill="none"
                      />
                      <g
                        id="Group_2476"
                        data-name="Group 2476"
                        transform="translate(760 2394)"
                      >
                        <path
                          id="Path_982"
                          data-name="Path 982"
                          d="M0,0H30V30H0Z"
                          fill="none"
                        />
                        <path
                          id="Path_983"
                          data-name="Path 983"
                          d="M20.091,4a1.327,1.327,0,0,1,1.273,1.375V11.15L28,6.131a.608.608,0,0,1,.887.171A.733.733,0,0,1,29,6.695v16.61a.664.664,0,0,1-.636.688A.611.611,0,0,1,28,23.869L21.364,18.85v5.775A1.327,1.327,0,0,1,20.091,26H2.273A1.327,1.327,0,0,1,1,24.625V5.375A1.327,1.327,0,0,1,2.273,4ZM18.818,6.75H3.545v16.5H18.818ZM11.182,9.5,16.273,15H12.455v5.5H9.909V15H6.091Zm15.273,1.156-5.091,3.85v.987l5.091,3.85V10.655Z"
                        />
                      </g>
                    </g>
                  </svg>
                </label>
              )}
              <input
                className="VinputBox"
                type="file"
                id="vid"
                name="vid"
                accept="video/*"
                onChange={(e) => {
                  setVideoFile(e.target.files[0]);
                }}
              />
            </div>

            <div id="VsubCont">
              <button id="Vsubmit">
                {isLoading ? <CircularProgress /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddProduct;
