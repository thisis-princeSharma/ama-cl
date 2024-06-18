import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC2klFnIe5K1Mi3lYmU3EauOXMQn66YV6k",
    authDomain: "wha-cl.firebaseapp.com",
    projectId: "wha-cl",
    storageBucket: "wha-cl.appspot.com",
    messagingSenderId: "324454899961",
    appId: "1:324454899961:web:66ed7d92e635d7ce658228",
    measurementId: "G-M241YC1KYX"
};

const firebaseApp = firebase.initializeApp;
(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebaseApp.auth()
GoogleAuthProvider();

export {auth, provider};
export default db;

