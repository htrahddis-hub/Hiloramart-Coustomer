import { getVendorAddresss, userProfileRequest, vendorProfileRequest } from "../API";

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

export const vendorProfile = async (id, upDateState) => {
  try {
    const res = await vendorProfileRequest(id);
    if (res.data) {
      upDateState(res.data.data);
    }
  } catch (Err) {
    console.log(Err);
  }
};


export const getVendorAddress = async(setVendorAddress) => {
  try {
    const res = await getVendorAddresss();
    setVendorAddress(res.data.data);
  } catch (error) {
    console.log(error);
  }
}
