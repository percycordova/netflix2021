import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcdZNYX_5dHRIQXPvyS8DOJ10IDN4rzFc",
  authDomain: "clon-netflix-16dcc.firebaseapp.com",
  projectId: "clon-netflix-16dcc",
  storageBucket: "clon-netflix-16dcc.appspot.com",
  messagingSenderId: "712950878302",
  appId: "1:712950878302:web:3445142f0e214d8b0f64cf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();

export {auth};