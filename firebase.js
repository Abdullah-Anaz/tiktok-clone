// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApv0vmrmkEUifefsrKuwcPBFkcWx6x8h0",
  authDomain: "tiktok-clone-ca5ae.firebaseapp.com",
  projectId: "tiktok-clone-ca5ae",
  storageBucket: "tiktok-clone-ca5ae.appspot.com",
  messagingSenderId: "283631237376",
  appId: "1:283631237376:web:1ee6eaa7b5007728475be5",
  measurementId: "G-HG6PZZM4JD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
