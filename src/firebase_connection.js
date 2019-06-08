import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAQlNVNuuZaV1pSlzVJ-LAa9B31jeHf0WI",
    authDomain: "whatsappproject-7e5a6.firebaseapp.com",
    databaseURL: "https://whatsappproject-7e5a6.firebaseio.com",
    projectId: "whatsappproject-7e5a6",
    storageBucket: "whatsappproject-7e5a6.appspot.com",
    messagingSenderId: "729535591974",
    appId: "1:729535591974:web:302eece902db24df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;