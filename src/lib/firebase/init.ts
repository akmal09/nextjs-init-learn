// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDMZVANPBrLjcEwBLxysEhah34eQ8qTfnw",
//   authDomain: "database-next-108e5.firebaseapp.com",
//   projectId: "database-next-108e5",
//   storageBucket: "database-next-108e5.appspot.com",
//   messagingSenderId: "955930719417",
//   appId: "1:955930719417:web:b408b560c36f1fb79c9768",
//   measurementId: "G-1BELJLHQYS"
// };
const firebaseConfig = {
  apiKey: process.env.firebase_apiKey,
  authDomain: process.env.firebase_authDomain,
  projectId: process.env.firebase_projectId,
  storageBucket: process.env.firebase_storageBucket,
  messagingSenderId: process.env.firebase_messagingSenderId,
  appId: process.env.firebase_appId,
  measurementId: process.env.firebase_measurementId
};

console.log("log config",firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app