import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA7JCsY2r_a6T56iQEA35qw5xgx94fgzaI",
  authDomain: "shootthebreeze-559ba.firebaseapp.com",
  databaseURL: "https://shootthebreeze-559ba.firebaseio.com",
  storageBucket: "shootthebreeze-559ba.appspot.com",
  messagingSenderId: "357756180386"  
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
