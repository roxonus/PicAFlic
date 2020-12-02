import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyDQakVNqNH3oDsejbphYA9RyNfwjqc5_Ks",
  authDomain: "picaflic-fb2d2.firebaseapp.com",
  databaseURL: "https://picaflic-fb2d2.firebaseio.com",
  projectId: "picaflic-fb2d2",
  storageBucket: "picaflic-fb2d2.appspot.com",
  messagingSenderId: "184275859527",
  appId: "1:184275859527:web:cf73fd2ea6ddfa54f05962"
}
// Initilize Firebase
firebase.initializeApp(config);

export default firebase;