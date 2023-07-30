import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// export const auth=firebase.initializeApp({
//     apiKey: "AIzaSyA7OpPcKFnlTn8xtRdL9lNb_MVyDRznMwk",
//     authDomain: "styleschat-11daa.firebaseapp.com",
//     projectId: "styleschat-11daa",
//     storageBucket: "styleschat-11daa.appspot.com",
//     messagingSenderId: "605391844489",
//     appId: "1:605391844489:web:a44442df5512c8d45f0258"
//   }).auth

import "firebase/app";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyA7OpPcKFnlTn8xtRdL9lNb_MVyDRznMwk",
    authDomain: "styleschat-11daa.firebaseapp.com",
    projectId: "styleschat-11daa",
    storageBucket: "styleschat-11daa.appspot.com",
    messagingSenderId: "605391844489",
    appId: "1:605391844489:web:a44442df5512c8d45f0258",
  })
  .auth();
