import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

export const uploadFile = (e, setFilePath, setUpdatedProfileData) => {
    const file = e.target.files[0];
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = `${Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )}%`;
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFilePath(downloadURL);
          setUpdatedProfileData((prev) => {
            return {...prev, profilePic: downloadURL}
          })
        });
      }
    );
}
export const uploadFile2 = (e, setAadharUrl, setUpdatedProfileData) => {
    const file = e.target.files[0];
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = `${Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )}%`;
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setAadharUrl(downloadURL);
          setUpdatedProfileData((prev) => {
            return {...prev, aadhar: downloadURL}
        })
        });
      }
    );
}