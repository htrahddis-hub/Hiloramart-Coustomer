import React from "react";
import "../VendorsStyle/AddProduct.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
const AddProduct = () => {
  return (
    <Container>
      <div className="VContainer1">
        <div className="Vhead">WANT TO ADD YOUR PRODUCTS</div>
        <div className="addProduct-container">
          <form>
            <div>
              <input
                type="text"
                placeholder="Categories"
                className="VinputBox"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Brand Name"
                className="VinputBox"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Product Name"
                className="VinputBox"
              />
            </div>
            <div>
              <input type="text" placeholder="Price" className="VinputBox" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Product Description"
                className="VinputBox"
              />
            </div>
            <div id="hide">
              <div className="VsmallInputCon">
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
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
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                  />
                </label>
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
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
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                  />
                </label>
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
                      <div className="imagecont">Add Image</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                      >
                        <g
                          id="Group_2480"
                          data-name="Group 2480"
                          transform="translate(-224 -2072)"
                          opacity="0.5"
                        >
                          <rect
                            id="Rectangle_2949"
                            data-name="Rectangle 2949"
                            width="35"
                            height="35"
                            transform="translate(224 2072)"
                            fill="none"
                          />
                          <g
                            id="Group_2479"
                            data-name="Group 2479"
                            transform="translate(230 2078)"
                          >
                            <path
                              id="Path_984"
                              data-name="Path 984"
                              d="M0,0H24V24H0Z"
                              fill="none"
                            />
                            <path
                              id="Path_985"
                              data-name="Path 985"
                              d="M21,15v3h3v2H21v3H19V20H16V18h3V15Zm.008-12A.993.993,0,0,1,22,3.993V13H20V5H4V19L14,9l3,3v2.829l-3-3L6.827,19H14v2H2.992A.993.993,0,0,1,2,20.007V3.993A1,1,0,0,1,2.992,3H21.008ZM8,7A2,2,0,1,1,6,9,2,2,0,0,1,8,7Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                  />
                </label>
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
                      <div className="imagecont">Add Image</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                      >
                        <g
                          id="Group_2480"
                          data-name="Group 2480"
                          transform="translate(-224 -2072)"
                          opacity="0.5"
                        >
                          <rect
                            id="Rectangle_2949"
                            data-name="Rectangle 2949"
                            width="35"
                            height="35"
                            transform="translate(224 2072)"
                            fill="none"
                          />
                          <g
                            id="Group_2479"
                            data-name="Group 2479"
                            transform="translate(230 2078)"
                          >
                            <path
                              id="Path_984"
                              data-name="Path 984"
                              d="M0,0H24V24H0Z"
                              fill="none"
                            />
                            <path
                              id="Path_985"
                              data-name="Path 985"
                              d="M21,15v3h3v2H21v3H19V20H16V18h3V15Zm.008-12A.993.993,0,0,1,22,3.993V13H20V5H4V19L14,9l3,3v2.829l-3-3L6.827,19H14v2H2.992A.993.993,0,0,1,2,20.007V3.993A1,1,0,0,1,2.992,3H21.008ZM8,7A2,2,0,1,1,6,9,2,2,0,0,1,8,7Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                  />
                </label>
                <label className="VsmallInputLabel">
                  <>
                    <div placeholder="Add Image" className="VsmallInputBox">
                      <div className="imagecont">Add Image</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                      >
                        <g
                          id="Group_2480"
                          data-name="Group 2480"
                          transform="translate(-224 -2072)"
                          opacity="0.5"
                        >
                          <rect
                            id="Rectangle_2949"
                            data-name="Rectangle 2949"
                            width="35"
                            height="35"
                            transform="translate(224 2072)"
                            fill="none"
                          />
                          <g
                            id="Group_2479"
                            data-name="Group 2479"
                            transform="translate(230 2078)"
                          >
                            <path
                              id="Path_984"
                              data-name="Path 984"
                              d="M0,0H24V24H0Z"
                              fill="none"
                            />
                            <path
                              id="Path_985"
                              data-name="Path 985"
                              d="M21,15v3h3v2H21v3H19V20H16V18h3V15Zm.008-12A.993.993,0,0,1,22,3.993V13H20V5H4V19L14,9l3,3v2.829l-3-3L6.827,19H14v2H2.992A.993.993,0,0,1,2,20.007V3.993A1,1,0,0,1,2.992,3H21.008ZM8,7A2,2,0,1,1,6,9,2,2,0,0,1,8,7Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    className="VsmallInputBox"
                  />
                </label>
              </div>
              <div placeholder="Add Image" className="VinputBox video-cont">
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
                <input
                  className="VinputBox"
                  type="file"
                  id="vid"
                  name="vid"
                  accept="video/*"
                />
              </div>
            </div>

            <div id="VsubCont">
              <Link
                to="/VmyProduct"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button id="Vsubmit">Submit</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddProduct;
