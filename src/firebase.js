import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
	apiKey: "AIzaSyDSrn6az4TwsFUw2wRAef5LvWfZTYiH2us",
	authDomain: "react-contact-73281.firebaseapp.com",
	projectId: "react-contact-73281",
	storageBucket: "react-contact-73281.appspot.com",
	messagingSenderId: "1013996419970",
	appId: "1:1013996419970:web:532d5f459c20704ca12d9b",
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
