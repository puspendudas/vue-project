import "firebase/auth";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    // Firebase Config
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
     
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  export const chatRef = db.ref("chats");
  
export default firebase;
