import { addVendorAddress, changeCurrentAddress, deleteSavedAddress, getVendorAddresss, getVendorAllAds, updateProfile, userProfileRequest, vendorProfileRequest } from "../API";
import { createShiprocketLocation } from "./ShiprocketReducer";

export const userProfile = async (upDateState) => {
  try {
    const res = await userProfileRequest();
    if (res.data) {
      upDateState(res.data);
    }
  } catch (Err) {
    console.log(Err);
  }
};

export const vendorProfile2 = async(id, upDateState) => {
  try {
    const res = await vendorProfileRequest(id);
    if(res.data) {
      upDateState(res.data.data);
    }
  } catch (error) {
    console.log(error);
  }
}

export const vendorProfile = async (id, upDateState, setUpdatedProfileData, setBankDetails) => {
  console.log(id)
  try {
    const res = await vendorProfileRequest(id);
    if (res.data) {
      upDateState(res.data.data);
      setUpdatedProfileData({
        profilePic: res.data.data?.profilePic,
        name: res.data.data?.name,
        number: res.data.data?.number
    });
    setBankDetails({
        account_no: res.data.data?.bankDetails?.account_no,
        ifsc_code: res.data.data?.bankDetails?.ifsc_code,
        bank_name: res.data.data?.bankDetails?.bank_name,
        branch_name: res.data.data?.bankDetails?.branch_name,
        account_holder_name: res.data.data?.bankDetails?.account_holder_name
    })
    }
  } catch (Err) {
    console.log(Err);
  }
};


export const getVendorAddress = async(setVendorAddress) => {
  try {
    const res = await getVendorAddresss();
    setVendorAddress(res?.data?.data?.address);
  } catch (error) {
    console.log(error);
  }
}

export const addVendorAddressData = async(data, setIsLoading2, handleClose, setVendorAddress, profileData, setShiprocketAddressResponse) => {
  try {
    setIsLoading2(true);
    const res = await addVendorAddress(data);
    console.log(res?.data?.data, "vendor address added");
    setVendorAddress(res?.data?.data?.address);
    createShiprocketLocation(res?.data?.data?.address, profileData, setShiprocketAddressResponse);
    handleClose();
  } catch (error) {
    console.log(error);
  } finally{
    setIsLoading2(false)
  }
}


export const changeCurrentAdd = async (id) => {
  try {
    const res = await changeCurrentAddress(id);
    console.log(res, "current changed");
  } catch (error) {
    console.log(error);
  }
}


export const deleteSavedAdd = async (id, setVendorAddress) => {
  try {
    const res = await deleteSavedAddress(id);
    console.log(res, "address deleted");
    if(res?.data?.message === "Deleted Successfuly!") {
      setVendorAddress(res?.data?.data?.address)
    }
  } catch(error) {
    console.log(error);
  }
}

export const updateProfileFun = async (data, id, setIsLoading, navigate) => {

  try {
    setIsLoading(true);
    const res = await updateProfile(data, id);
    console.log(res);
    navigate("/profile");
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
}

export const getVendorAds = async(setAllAds, setIsLoading) => {
  try {
    setIsLoading(true);
    const res = await getVendorAllAds();
    setAllAds(res.data.data);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
}