// import firebase from "firebase/app";
// import "firebase/database";
import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
	apiKey: "AIzaSyDYKD24JSj9SykOnFi5oA1aaqYDD9ysBIE",
	authDomain: "react-contact-4d7a1.firebaseapp.com",
	projectId: "react-contact-4d7a1",
	storageBucket: "react-contact-4d7a1.appspot.com",
	messagingSenderId: "688519965407",
	appId: "1:688519965407:web:2f85e31fee0fcb562b976a",
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
