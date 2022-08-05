const firebaseConfig = {
  apiKey: "AIzaSyA_Lzev9teW5VQdGqprYs9F_nxrK4ZNxWU",
  authDomain: "a-30ace.firebaseapp.com",
  projectId: "a-30ace",
  storageBucket: "a-30ace.appspot.com",
  messagingSenderId: "875428583590",
  appId: "1:875428583590:web:755c8529bfa7289c563c67",
  measurementId: "G-DJKRVKE530",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
