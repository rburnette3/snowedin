import firebase from 'firebase'

const config = {
   apiKey: "AIzaSyDrqYCk_xgTTvXVQzl8n_9UTTA66o2ZMgo",
   authDomain: "snowedin-91ce7.firebaseapp.com",
   databaseURL: "https://snowedin-91ce7.firebaseio.com",
   projectId: "snowedin-91ce7",
   storageBucket: "snowedin-91ce7.appspot.com",
   messagingSenderId: "427641363700"
 };

 firebase.initializeApp(config);

export default firebase;
