import firebase "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp( {

    apiKey: "AIzaSyAQxb47DG59DV1-0mZ9_hQFMZEJsvHiHbE",
    authDomain: "unichat-723d8.firebaseapp.com",
    projectId: "unichat-723d8",
    storageBucket: "unichat-723d8.firebasestorage.app",
    messagingSenderId: "128072376114",
    appId: "1:128072376114:web:61aa58695b971d7f56012b",
    measurementId: "G-PK5TR9KZ1J"
  }).auth();