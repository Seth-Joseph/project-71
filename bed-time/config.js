import firebase from 'firebase';
require ('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAaGPMhmXJNk9FYfic5TjiUaxyObczEBS4",
  authDomain: "bedtime-stories-8fa5d.firebaseapp.com",
  projectId: "bedtime-stories-8fa5d",
  storageBucket: "bedtime-stories-8fa5d.appspot.com",
  messagingSenderId: "923932941717",
  appId: "1:923932941717:web:c9c7476a86bf8c7dfdea9c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export default firebase.firestore()
