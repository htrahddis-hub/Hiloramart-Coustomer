import { Button, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "../Styles/pages/EditUserProfile.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AuthContext } from "../Context/AuthContext";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import {
  ADD_USER_ADDRESS,
  CHANGE_USER_CURRENT_ADDRESS,
  DELETE_SAVED_ADDRESS,
  GET_USER_ADDRESS,
  GET_USER_PROFILE,
  UPDATE_PROFILE,
  UPDATE_USER_PROFILE,
  UPLOAD_PROFILE_PIC,
} from "../Context/Types";
import { uploadFile } from "../firebase/fileUpload";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "95vh",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  // overflow: 'auto',
};

const VEditProfile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { dispatch, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [profileData, setProfileData] = useState();
  const [allCountries, setAllCountries] = useState([]);
  const [allLocalities, setAllLocalities] = useState([]);
  const [file, setFile] = React.useState();
  const [image, setImage] = React.useState();

  const [vendorAddress, setVendorAddress] = useState([]);

  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    isCurrent: false,
  });

  const [updatePf, setUpdatePf] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const onImageChange = (event) => {
    setFile(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleUpload = async () => {
    if (file) {
      const fileRef = ref(storage, `files/${file.name + v4()}`);
      const next = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(next.ref);
      console.log(url);
      dispatch({
        type: UPLOAD_PROFILE_PIC,
        data: { profile_pic: url },
      });
    } else {
      alert("no image");
    }
  };

  const getProfileData = () => {
    dispatch({ type: GET_USER_PROFILE, upDateState: setProfileData, setImage,setUpdatePf });
  };

  const getAddress = () => {
    dispatch({
      type: GET_USER_ADDRESS,
      setUserAddress: setVendorAddress,
    });
  };
  console.log(vendorAddress);

  //the shiprocket api is send through cors fix kylo url,
  //where localhost:3000 is not allowed but the shiprocket APi I am using doeesn't need it
  const getShiprocketCountries = async () => {
    const { data } = await axios.get(
      "https://apiv2.shiprocket.in/v1/external/countries"
    );
    setAllCountries(data.data);
  };

  const getShiprocketLocalities = async (e) => {
    const value = JSON.parse(e.target.value);
    setAddress((prev) => {
      return { ...prev, country: value.name };
    });
    const { data } = await axios.get(
      `https://apiv2.shiprocket.in/v1/external/countries/show/${value.id}`
    );
    setAllLocalities(data.data);
  };

  const stateHandler = (e) => {
    setAddress((prev) => {
      return { ...prev, state: e.target.value };
    });
    console.log(e.target.value);
  };

  const addNewAddressHandler = (e) => {
    setAddress((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const profileDetailHandler = (e) => {
    setUpdatePf((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const saveAddress = () => {
    dispatch({
      type: ADD_USER_ADDRESS,
      address,
      setIsLoading2,
      handleClose,
      setVendorAddress,
    });
  };

  const changeCurrentAddress = (id) => {
    dispatch({
      type: CHANGE_USER_CURRENT_ADDRESS,
      id,
    });
  };

  const deleteSavedAddress = (id) => {
    dispatch({
      type: DELETE_SAVED_ADDRESS,
      id,
      setVendorAddress,
    });
  };

  const updateProfile = () => {
    const data = {
      ...updatePf,
    };
    dispatch({
      type: UPDATE_USER_PROFILE,
      data,
    });
  };

  useEffect(() => {
    getProfileData();
    getAddress();
    getShiprocketCountries();
  }, [open]);

  // console.log(profileData);
  // console.log(vendorAddress);
  // console.log(allCountries, "all Countries")
  // console.log(address, "my address")

  // console.log(bankDetails, "bank detail");
  // console.log(updatedProfileData, "vendor detail");

  return (
    <div style={{ padding: "0 30px" }}>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "55px 0",
        }}
      >
        Edit Profile
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px 0",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", border: "none" }}
            src={image}
            alt=""
          />
        </div>
        <div className="d-flex align-items-center">
          <input
            onChange={onImageChange}
            style={{ border: "none" }}
            type="file"
            name="profilePic"
          />
          <button
            className="rounded border border-0 p-2 text-white"
            style={{ background: "#FF8D22" }}
            onClick={handleUpload}
          >
            Save
          </button>
        </div>
      </div>

      <div style={{ display: "flex", padding: "0 20px" }}>
        <div style={{ width: "50%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="vname">Name</label>
            <input
              onChange={profileDetailHandler}
              type="text"
              id="vname"
              name="name"
              defaultValue={profileData?.name}
              placeholder={profileData?.name}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="mobile">Mobile</label>
            <input
              onChange={profileDetailHandler}
              type="text"
              id="mobile"
              name="mobile"
              defaultValue={profileData?.mobile}
              placeholder={profileData?.mobile}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Email</label>
            <input
              onChange={profileDetailHandler}
              type="text"
              id="email"
              name="email"
              defaultValue={profileData?.email}
              placeholder={profileData?.email}
            />
          </div>
        </div>

        <div style={{ width: "50%", padding: "0 20px" }}>
          <div>
            <h5 style={{ textAlign: "center" }}>Current Address</h5>

            {vendorAddress?.map(
              (item) =>
                item?.isCurrent && (
                  <div
                    className="addressContainer"
                    style={{
                      border: "1px solid #FF8D22",
                      borderRadius: "8px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <p>{item?.line1}</p>
                      <p>{item?.line2}</p>
                      <p>{`${item?.city} - ${item?.pincode}`}</p>
                      <p>{`${item?.state}, ${item?.country}`}</p>
                    </div>
                    <div
                      style={{
                        width: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: "#FF8D22",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </div>
                )
            )}

            <div
              style={{
                display: "flex",
                marginTop: "40px",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <h5 style={{ textAlign: "center" }}>Saved Address</h5>
              <div>
                <Button
                  onClick={handleOpen}
                  variant="contained"
                  style={{ backgroundColor: "#FF8D22", width: "100%" }}
                >
                  Add New Address
                </Button>
              </div>
            </div>
            {vendorAddress?.map(
              (item) =>
                !item?.isCurrent && (
                  <div
                    className="addressContainer"
                    style={{
                      border: "1px solid #FF8D22",
                      borderRadius: "8px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <p>{item?.line1}</p>
                      <p>{item?.line2}</p>
                      <p>{`${item?.city} - ${item?.pincode}`}</p>
                      <p>{`${item?.state}, ${item?.country}`}</p>
                    </div>
                    <div
                      style={{
                        width: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        onClick={() => changeCurrentAddress(item?._id)}
                        style={{
                          width: "20px",
                          height: "20px",
                          border: "4px solid #FF8D22",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                      ></div>
                      <span
                        onClick={() => deleteSavedAddress(item?._id)}
                        style={{ cursor: "pointer" }}
                      >
                        <DeleteIcon style={{ color: "gray" }} />
                      </span>
                    </div>
                  </div>
                )
            )}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <h5 style={{ textAlign: "center" }}>Add New Address</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                  }}
                >
                  <label htmlFor="address">Address Line 1</label>
                  <input
                    onChange={addNewAddressHandler}
                    type="text"
                    name="line1"
                    id="address"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                  }}
                >
                  <label htmlFor="address_2">Address Line 2</label>
                  <input
                    onChange={addNewAddressHandler}
                    type="text"
                    name="line2"
                    id="address_2"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                  }}
                >
                  <label htmlFor="city">City</label>
                  <input
                    onChange={addNewAddressHandler}
                    type="text"
                    name="city"
                    id="city"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                  }}
                >
                  <label htmlFor="country">Country</label>
                  <select
                    onChange={getShiprocketLocalities}
                    className="selector"
                    name="country"
                    id="country"
                  >
                    {allCountries?.map((country) => (
                      <option
                        value={JSON.stringify({
                          id: country.id,
                          name: country?.name,
                        })}
                      >
                        {country?.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                  }}
                >
                  <label htmlFor="state">State</label>

                  <select
                    onChange={stateHandler}
                    className="selector"
                    name="state"
                    id="state"
                  >
                    {allLocalities?.map((localities) => (
                      <option value={localities?.name}>
                        {localities?.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                  }}
                >
                  <label htmlFor="zip_code">Zip Code</label>
                  <input
                    onChange={addNewAddressHandler}
                    type="text"
                    name="pincode"
                    id="zip_code"
                  />
                </div>

                <div>
                  <Button
                    onClick={saveAddress}
                    style={{ marginRight: "10px", backgroundColor: "#FF8D22" }}
                    variant="contained"
                  >
                    {isLoading2 ? <CircularProgress /> : "Save"}
                  </Button>
                  <Button
                    onClick={handleClose}
                    style={{
                      marginRight: "10px",
                      color: "#FF8D22",
                      borderColor: "#FF8D22",
                    }}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>

      <div
        style={{ margin: "40px 0", display: "flex", justifyContent: "center" }}
      >
        <Button
          onClick={updateProfile}
          variant="contained"
          style={{ backgroundColor: "#FF8D22" }}
        >
          {isLoading ? <CircularProgress /> : "Update Profile"}
        </Button>
      </div>
    </div>
  );
};

export default VEditProfile;
