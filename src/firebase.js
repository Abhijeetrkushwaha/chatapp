import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "chatapp-a778c",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDING_ID,
    appId: process.env.REACT_APP_API_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
})

const db = firebaseApp.firestore();

export default db;