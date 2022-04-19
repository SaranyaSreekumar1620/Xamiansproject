import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDGW9EftxLFbkn4p2PMMRp5RhUNA6m5G-8",
  authDomain: "xamians-86d31.firebaseapp.com",
  projectId: "xamians-86d31",
  storageBucket: "xamians-86d31.appspot.com",
  messagingSenderId: "201791219274",
  appId: "1:201791219274:web:a6e3d9a51fd08707f228b3"
};
    

firebase.initializeApp(firebaseConfig)
export var db = firebase.firestore();
export default firebase ;
 