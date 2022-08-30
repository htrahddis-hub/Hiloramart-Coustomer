import { CircularProgress } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import Image from "../Assets/Images/MyWishList/Image.svg";
import Delete from "../Assets/Images/remove.svg";
import { AuthContext } from "../Context/AuthContext";
import { DELETE_PRODUCT, UPDATE_PRODUCT } from "../Context/Types";
import "../Styles/pages/Cart2.css";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import { storage } from "../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import AddProduct from "./AddProduct";
import CloseIcon from '@mui/icons-material/Close';



const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "42%",
  // height: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  // padding: '0 10px 0 10px',
  borderRadius: '8px',
  border: 'none',
  display: 'flex',
  flexDirection: 'column'
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  // height: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  border: 'none'
};

const MyProductCont = (props) => {
  const { dispatch } = useContext(AuthContext);
  const { description, price, productImage, _id, cb, productVideos, name, createdAt, stock } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: name,
    description: description,
    price: price,
    stock: stock,
  });
  const [file, setFile] = useState([]);
  const [videoFile, setVideoFile] = useState();
  let urlResponse = [];
  let videoUrlResponse = []; 


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
      editProduct();
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
          editProduct();
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };


  const deleteProduct = () => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: _id,
      setIsLoading,
      cb,
      productImage,
      productVideos,
    });
  };

  const inputHandler = (e) => {
    setInputData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const editProduct = () => {
    setIsLoading(true);
    dispatch({
      type: UPDATE_PRODUCT, 
      payload: inputData,
      id: _id,
      setIsLoading,
      navigate,
      urls: urlResponse,
      videoUrlResponse,
    })
  }

  const AddProductForm = (e) => {
    e.preventDefault();
    if (file.length == 0) {
      alert("Atleast one Image is required ");
      return;
    }
    setIsLoading(true);
    uploadFile();
  };


  console.log(props, "prosp");
  return (
    <div className="CPCmain" style={{ background: "rgba(112,112,112,0.05)", cursor: 'pointer' }}>
      <div onClick={handleOpen2} className="CPCmain">

      <div className="CPC1">
        <img style={{borderRadius: '8px'}} src={productImage[0]} alt="" />
      </div>
      <div className="product-detail">
        <div className="CPCin1">{name}</div>
        <div className="CPCin2">RS. {price}</div>
        <p style={!stock ? {color: 'red'} : {color: 'green'}}>Stock: {stock ? stock : '0'}</p>
      </div>
      </div>
      <div className="product-options">
        <div className="remove-icon" onClick={deleteProduct}>
          {isLoading ? (
            <CircularProgress sx={{ color: "black" }} size={20} />
          ) : (
            <img src={Delete} alt="" className="CPC2" />
          )}
        </div>
        <div
          style={{ color: "#FF8D22", fontWeight: "bold", marginBottom: "10px", cursor: 'pointer' }}
          onClick={handleOpen}
        >
          Edit
        </div>
      </div>


      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Button onClick={handleClose2} style={{width: '30px', marginLeft: 'auto', padding: 0, color: '#FF8D22'}}><CloseIcon style={{color: '#FF8D22'}}/></Button>
          <div className="top">
            <div className="img-container">
              <img style={{borderRadius: '8px'}} src={productImage[0]} alt="" />
            </div>
            <div className="product-details">
              <p>{name}</p>
              <p>{description}</p>
            </div>
          </div>
          <div className="mid1">
            <div className="midinner1">
              <span>Price</span>
              <span className="middetails">RS. {price}</span>
            </div>
            <div className="midinner2">
              <span>Posted Date</span>
              <span className="middetails">{createdAt.slice(0,10)}</span>
            </div>
            <div className="midinner3">
              <span>Product Description</span>
              <span className="middetails">{description}</span>
            </div>
          </div>
          <div className="mid2">
            <span>Product Images</span>
            <div className="img-wrapper">
              {
                productImage?.map((img) => (
                  <div className="img-container">
                    <img style={{borderRadius: '8px'}} src={img} alt="" />
                  </div>

                ))
              }
              {/* <div className="img-container">
                <img style={{borderRadius: '8px'}} src={productImage[1]} alt="" />
              </div>
              <div className="img-container">
                <img style={{borderRadius: '8px'}} src={productImage[2]} alt="" />
              </div> */}
            </div>
          </div>
          <div className="bottom">
            <span>Product Video</span>
            <div className="video-container">
              <video style={{backgroundColor: '#80808038', borderRadius: '8px'}} src={productVideos[0]} autoPlay                    muted
                    playsInline
                    controls>
                <source src={productVideos[0]} type="video/mp4"/>
              </video>
            </div>
          </div>
        </Box>
      </Modal>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormControl sx={{ width: '100%' }}>
          <div style={{display: 'flex'}}>
            <div style={{marginRight: '20px'}} className="input-container">
              <label htmlFor="name2">Name:</label>
              <OutlinedInput onChange={inputHandler} id="name2" placeholder={name} name="name"/>
            </div>
            <div className="input-container">
              <label htmlFor="description">Product Description:</label>
              <OutlinedInput onChange={inputHandler} id="description" type="text" placeholder={description} name="description" />
            </div>
          </div>

          <div style={{display: 'flex'}}>
            <div style={{marginRight: '20px'}} className="input-container">
              <label htmlFor="price">Price:</label>
              <OutlinedInput onChange={inputHandler} id="price" placeholder={price} name="price" />
            </div>
            <div className="input-container">
              <label htmlFor="stock">Stock:</label>
              <OutlinedInput onChange={inputHandler} id="stock" placeholder={stock} name="stock" />
            </div>
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
        </FormControl>

        <div className="button-container">
        <Button onClick={AddProductForm} style={{backgroundColor: '#FF8D22', marginRight: '8px'}} variant="contained">{isLoading ? <CircularProgress /> : "Submit"}</Button>
        <Button onClick={handleClose} style={{color: '#FF8D22', borderColor: '#FF8D22'}} variant="outlined">Cancel</Button>

        </div>

        </Box>
      </Modal>
    </div>
  );
};

export default MyProductCont;
