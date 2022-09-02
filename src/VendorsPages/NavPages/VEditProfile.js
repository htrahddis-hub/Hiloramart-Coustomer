import { Button, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import '../../VendorsStyle/VEditProfile.css';
import DeleteIcon from '@mui/icons-material/Delete';
import imgFile from '../../Assets/Images/R.jpg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ADD_VENDOR_ADDRESS, CHANGE_CURRENT_ADDRESS, DELETE_SAVED_ADDRESS, GET_SHIPROCKET_COUNTRY, GET_SHIPROCKET_LOCALITY, GET_USER_PROFILE, GET_VENDOR_ADDRESS, GET_VENDOR_PROFILE, UPDATE_PROFILE } from '../../Context/Types';
import { uploadFile } from '../../firebase/fileUpload';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: '95vh',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    // overflow: 'auto',
  };

const VEditProfile = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {  AuthRole, dispatch, currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [profileData, setProfileData] = useState();
    const [allCountries, setAllCountries] = useState([]);
    const [allLocalities, setAllLocalities] = useState([]);

    const [filePath, setFilePath] = useState("");

    const [vendorAddress, setVendorAddress] = useState([])

    const [shiprocketAddressResponse, setShiprocketAddressResponse] = useState();

    const [address, setAddress] = useState({
        line1: "",
        line2: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
        isCurrent: false
    });

    const [bankDetails, setBankDetails] = useState({
        account_no: "",
        ifsc_code: "",
        bank_name: "",
        branch_name: "",
        account_holder_name: "",
    })

    const [updatedProfileData, setUpdatedProfileData] = useState({
        profilePic: "",
        name: "",
        number: "",
    })

    const getProfileData = (setUpdatedProfileData, setBankDetails) => {
        if (AuthRole === "user") {
          dispatch({ type: GET_USER_PROFILE, upDateState: setProfileData });
        } else {
          dispatch({
            type: GET_VENDOR_PROFILE,
            payload: currentUser.id,
            upDateState: setProfileData,
            setUpdatedProfileData,
            setBankDetails
          });
        }
    }

    const getAddress = () => {
        dispatch({
          type: GET_VENDOR_ADDRESS,
          setVendorAddress
        })
    }

    const getShiprocketCountries = () => {
        dispatch({
            type: GET_SHIPROCKET_COUNTRY,
            setAllCountries
        })
    }

    const getShiprocketLocalities = (e) => {
        const data = JSON.parse(e.target.value);
        setAddress((prev) => {
            return {...prev, country: data?.name}
        })
        dispatch({
            type: GET_SHIPROCKET_LOCALITY,
            setAllLocalities,
            id: data?.id
        })
    }

    const stateHandler = (e) => {
        const data = JSON.parse(e.target.value);
        setAddress((prev) => {
            return {...prev, state: data?.name}
        })
    }

    const addNewAddressHandler = (e) => {
        setAddress((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const profileDetailHandler = (e) => {
        setUpdatedProfileData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }



    const accountDetailHandler = (e) => {
        setBankDetails((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }


    const saveAddress = () => {
        dispatch({
            type: ADD_VENDOR_ADDRESS,
            address,
            setIsLoading2,
            handleClose, 
            setVendorAddress,
            profileData,
            setShiprocketAddressResponse
        })
    }

    const changeCurrentAddress = (id) => {
        dispatch({
            type: CHANGE_CURRENT_ADDRESS,
            id
        })
    }

    const deleteSavedAddress = (id) => {
        dispatch({
            type: DELETE_SAVED_ADDRESS,
            id, 
            setVendorAddress
        })
    }

    const updateProfile = () => {
        const data = {
            ...updatedProfileData,
            address: vendorAddress?.address,
            bankDetails
        }
        dispatch({
            type: UPDATE_PROFILE,
            data,
            id: currentUser?.id,
            setIsLoading,
            navigate
        })
    }


    useEffect(() => {
        if (AuthRole === "user") {

          } else {
            getProfileData(setUpdatedProfileData, setBankDetails);
          }
        getAddress();
        getShiprocketCountries();
    }, []);

    // console.log(profileData);
    // console.log(vendorAddress);
    // console.log(allCountries, "all Countries")
    // console.log(address, "my address")

    // console.log(bankDetails, "bank detail");
    // console.log(updatedProfileData, "vendor detail");

    console.log(shiprocketAddressResponse);


  return (
    <div style={{padding: '0 30px'}}>
        <div
          style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", margin: '55px 0' }}
        >
          Edit Profile
        </div>

        <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
            <div style={{width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', position: 'relative'}}>
                <img style={{width: '100%', height: '100%'}} src={filePath.length === 0 ? profileData?.profilePic : filePath} alt="" />
                <input onChange={(e) => uploadFile(e, setFilePath, setUpdatedProfileData)} style={{position: 'absolute', bottom: "-12px", left: '50%', right: 0, margin: '0 auto',transform: 'translateX(-50%)', width: '100%', border: 'none'}} type="file" name="profilePic" id="profile" />
            </div>
        </div>

        <div style={{display: 'flex', padding: '0 20px'}}>
            <div style={{width: '50%'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <label htmlFor="vname">Name</label>
                    <input onChange={profileDetailHandler} type="text" id='vname' name='name' defaultValue={profileData?.name} placeholder={profileData?.name}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <label htmlFor="mobile">Mobile</label>
                    <input onChange={profileDetailHandler} type="text" id='mobile' name='number' defaultValue={profileData?.number} placeholder={profileData?.number}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email'  defaultValue={profileData?.email} value={profileData?.email} disabled/>
                </div>
                <div style={{marginTop: '30px'}}>
                    <h5>Account Details</h5>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="account-no">Account No.</label>
                        <input onChange={accountDetailHandler} type="text" id='account-no' name='account_no'  defaultValue={profileData?.bankDetails?.account_no}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="ifsc-code">IFSC Code</label>
                        <input onChange={accountDetailHandler} type="text" id='ifsc-code' name='ifsc_code' defaultValue={profileData?.bankDetails?.ifsc_code}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="bank_name">Bank Name</label>
                        <input onChange={accountDetailHandler} type="text" id='bank_name' name='bank_name' defaultValue={profileData?.bankDetails?.bank_name}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="branch_name">Branch Name</label>
                        <input onChange={accountDetailHandler} type="text" id='branch_name' name='branch_name' defaultValue={profileData?.bankDetails?.branch_name}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="account_holder_name">Account Holder Name</label>
                        <input onChange={accountDetailHandler} type="text" id='account_holder_name' name='account_holder_name' defaultValue={profileData?.bankDetails?.account_holder_name}/>
                    </div>
                </div>
            </div>

            <div style={{width: '50%', padding: '0 20px'}}>
                <div>
                    <h5 style={{textAlign: 'center'}}>Current Address</h5>

                    {
                        vendorAddress?.map((item) => (
                            item?.isCurrent && (
                                <div className='addressContainer' style={{border: '1px solid #FF8D22', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                                    <div>
                                        <p>{item?.line1}</p>
                                        <p>{item?.line2}</p>
                                        <p>{`${item?.city} - ${item?.pincode}`}</p>
                                        <p>{`${item?.state}, ${item?.country}`}</p>
                                    </div>
                                    <div style={{width: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                        <div style={{width: '20px', height: '20px', backgroundColor: '#FF8D22', borderRadius: '50%'}}></div>
                                    </div>
                                </div>
                            )
                        ))
                    }

                    <div style={{display: 'flex', marginTop: '40px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px'}}>
                        <h5 style={{textAlign: 'center'}}>Saved Address</h5>
                        <div>
                            <Button onClick={handleOpen} variant='contained' style={{backgroundColor: '#FF8D22', width: '100%'}}>Add New Address</Button>
                        </div>
                    </div>
                    {
                        vendorAddress?.map((item) => (
                            !item?.isCurrent && (
                                <div className='addressContainer' style={{border: '1px solid #FF8D22', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                                    <div>
                                        <p>{item?.line1}</p>
                                        <p>{item?.line2}</p>
                                        <p>{`${item?.city} - ${item?.pincode}`}</p>
                                        <p>{`${item?.state}, ${item?.country}`}</p>
                                    </div>
                                    <div style={{width: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                        <div onClick={()=>changeCurrentAddress(item?._id)} style={{width: '20px', height: '20px', border: '4px solid #FF8D22', borderRadius: '50%', cursor: 'pointer'}}></div>
                                        <span onClick={()=>deleteSavedAddress(item?._id)} style={{cursor: 'pointer'}}><DeleteIcon style={{color: 'gray'}}/></span>
                                    </div>
                                </div>
                            )
                        ))
                    }
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <h5 style={{textAlign: 'center'}}>Add New Address</h5>
                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                                <label htmlFor="address">Address Line 1</label>
                                <input onChange={addNewAddressHandler} type="text" name='line1' id='address' />
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                                <label htmlFor="address_2">Address Line 2</label>
                                <input onChange={addNewAddressHandler} type="text" name='line2' id='address_2' />
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                                <label htmlFor="city">City</label>
                                <input onChange={addNewAddressHandler} type="text" name='city' id='city' />
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                                <label htmlFor="country">Country</label>
                                <select onChange={getShiprocketLocalities} className='selector' name="country" id="country">
                                    {
                                        allCountries?.map((country) => (
                                            <option value={JSON.stringify(country)}>{country?.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                                <label htmlFor="state">State</label>

                                <select onChange={stateHandler} className='selector' name="state" id="state">
                                    {
                                        allLocalities?.map((localities) => (
                                            <option value={JSON.stringify(localities)}>{localities?.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                                <label htmlFor="zip_code">Zip Code</label>
                                <input onChange={addNewAddressHandler} type="text" name='pincode' id='zip_code' />
                            </div>

                            <div>
                                <Button onClick={saveAddress} style={{marginRight: '10px', backgroundColor: '#FF8D22'}} variant='contained'>{isLoading2 ? <CircularProgress /> : "Save"}</Button>
                                <Button onClick={handleClose} style={{marginRight: '10px', color: '#FF8D22', borderColor: '#FF8D22'}} variant='outlined'>Cancel</Button>
                            </div>
                        </Box>
                    </Modal>

                </div>
            </div>
        </div>

        <div style={{margin: '40px 0', display: 'flex', justifyContent: 'center'}}>
            <Button onClick={updateProfile}  variant='contained' style={{backgroundColor: '#FF8D22'}}>{isLoading ? <CircularProgress /> :"Update Profile"}</Button>
        </div>



    </div>
  )
}

export default VEditProfile;