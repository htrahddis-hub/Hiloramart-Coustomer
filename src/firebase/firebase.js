// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAZZnpc6gUUILpxDZLHHoCXgPPG_tHannE",
    authDomain: "hiloramart-1458c.firebaseapp.com",
    projectId: "hiloramart-1458c",
    storageBucket: "hiloramart-1458c.appspot.com",
    messagingSenderId: "491854930220",
    appId: "1:491854930220:web:2f7c502be718a56bba0c89"
};

// Initialize Firebase
let app;
if (initializeApp.length === 0) {
    app = initializeApp(firebaseConfig);
  }
// const app = initializeApp(firebaseConfig);
export default app;
// export const db = getFirestore(app);
export const storage = getStorage(app);