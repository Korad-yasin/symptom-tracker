//firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAo8-TSfMUpZGMXFm6G1843C33q-oQu_BI",   // From GoogleService-Info.plist
    authDomain: "symptom-tracker-a68d3.firebaseapp.com",  // Based on the project ID
    projectId: "symptom-tracker-a68d3",  // From GoogleService-Info.plist
    storageBucket: "symptom-tracker-a68d3.appspot.com",  // From GoogleService-Info.plist
    messagingSenderId: "601274078815",  // From GoogleService-Info.plist (GCM_SENDER_ID)
    appId: "1:601274078815:ios:9de4592e558d760a466dea",  // From GoogleService-Info.plist (GOOGLE_APP_ID)
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Firebase will now handle persistence automatically for you
export { auth };
export default app;
