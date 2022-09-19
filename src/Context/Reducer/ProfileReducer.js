import {
  addVendorAddress,
  changeCurrentAddress,
  deleteSavedAddress,
  getVendorAddresss,
  getVendorAllAds,
  updateProfile,
  userProfileRequest,
  vendorProfileRequest,
  getUserAddresss,
  changeCurrentUserAddress,
  addUserAddress,
  updateUserProfilePic,
  updateUserProfile,
} from "../API";
import { createShiprocketLocation } from "./ShiprocketReducer";

export const userProfile = async (upDateState, setImage, setUpdatePf) => {
  try {
    const res = await userProfileRequest();
    if (res.data) {
      upDateState(res.data);
      setImage(res.data?.profile_pic);
      setUpdatePf({
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile.toString(),
      });
    }
  } catch (Err) {
    console.log(Err);
  }
};

export const vendorProfile2 = async (id, upDateState) => {
  try {
    const res = await vendorProfileRequest(id);
    if (res.data) {
      upDateState(res.data.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const vendorProfile = async (
  id,
  upDateState,
  setUpdatedProfileData,
  setBankDetails
) => {
  console.log(id);
  try {
    const res = await vendorProfileRequest(id);
    if (res.data) {
      upDateState(res.data.data);
      setUpdatedProfileData({
        profilePic: res?.data?.data?.profilePic,
        name: res?.data?.data?.name,
        number: res?.data?.data?.number,
        gst: res?.data?.data?.gst,
        email: res?.data?.data?.email
      });
      setBankDetails({
        account_no: res?.data?.data?.bankDetails?.account_no,
        ifsc_code: res?.data?.data?.bankDetails?.ifsc_code,
        bank_name: res?.data?.data?.bankDetails?.bank_name,
        branch_name: res?.data?.data?.bankDetails?.branch_name,
        account_holder_name: res?.data?.data?.bankDetails?.account_holder_name,
      });
    }
  } catch (Err) {
    console.log(Err);
  }
};

export const getVendorAddress = async (setVendorAddress) => {
  try {
    const res = await getVendorAddresss();
    setVendorAddress(res?.data?.data?.address);
  } catch (error) {
    console.log(error);
  }
};

export const getUserAddress = async (setUserAddress) => {
  try {
    const res = await getUserAddresss();
    console.log(res);
    setUserAddress(res?.data);
  } catch (error) {
    console.log(error);
  }
};

export const addVendorAddressData = async (
  data,
  setIsLoading2,
  handleClose,
  setVendorAddress,
  profileData,
  setShiprocketAddressResponse
) => {
  try {
    setIsLoading2(true);
    const res = await addVendorAddress(data);
    console.log(res?.data?.data, "vendor address added");
    setVendorAddress(res?.data?.data?.address);
    createShiprocketLocation(
      res?.data?.data?.address,
      profileData,
      setShiprocketAddressResponse
    );
    handleClose();
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading2(false);
  }
};

export const addUserAddressData = async (
  data,
  setIsLoading2,
  handleClose,
  setVendorAddress
) => {
  try {
    setIsLoading2(true);
    const res = await addUserAddress(data);
    setVendorAddress((old) => {
      old.push(data);
      return [...old];
    });
    handleClose();
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading2(false);
  }
};

export const changeCurrentUserAdd = async (id) => {
  try {
    const res = await changeCurrentUserAddress(id);
    console.log(res, "current changed");
  } catch (error) {
    console.log(error);
  }
};

export const uploadProfilePic = async (data) => {
  try {
    const res = await updateUserProfilePic(data);
    if (res.data.message === "Updated Successfully") {
      alert("profile_pic_updated");
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserProfiles = async (data) => {
  try {
    const res = await updateUserProfile(data);

    if (res.data.message === "Updated Successfully") {
      alert("profile_pic_updated");
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};

export const changeCurrentAdd = async (id) => {
  try {
    const res = await changeCurrentAddress(id);
    console.log(res, "current changed");
  } catch (error) {
    console.log(error);
  }
};

export const deleteSavedAdd = async (id, setVendorAddress) => {
  try {
    const res = await deleteSavedAddress(id);
    console.log(res, "address deleted");
    if (res?.data?.message === "Deleted Successfuly!") {
      setVendorAddress(res?.data?.data?.address);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProfileFun = async (data, id, setIsLoading, navigate) => {
  console.log(data);
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
};

export const getVendorAds = async (setAllAds, setIsLoading) => {
  try {
    setIsLoading(true);
    const res = await getVendorAllAds();
    setAllAds(res.data.data);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
