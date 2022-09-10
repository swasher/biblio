/* eslint-disable */

// import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

// firebase init - add your own config here
const firebaseConfig  = {
    apiKey: import.meta.env.VITE_VUE_APP_apiKey,
    authDomain: import.meta.env.VITE_VUE_APP_authDomain,
    databaseURL: import.meta.env.VITE_VUE_APP_databaseURL,
    projectId: import.meta.env.VITE_VUE_APP_projectId,
    storageBucket: import.meta.env.VITE_VUE_APP_storageBucket,
    messagingSenderId: import.meta.env.VITE_VUE_APP_messagingSenderId,
    appId: import.meta.env.VITE_VUE_APP_appId
}

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth()


// console.log(firebase);
// console.log(firebaseApp);

// import { collection, addDoc, getDocs } from "firebase/firestore";

//
// try {
//     const docRef = await addDoc(collection(db, "books"), {
//         name: 'FUCKING SHAIZE'
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }

// const querySnapshot = await getDocs(collection(db, "books"));
// querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
// });





// // Get a Firestore instance
// export const db = firebase
//     .initializeApp(firebaseConfig)
//     .firestore()
//
// export const auth = firebase
//     .auth();
//
// export const storage = firebase
//     .storage();
//
// export const usersCollection = db.collection('users')
// export const logosCollection = db.collection('logos')
// export const storageRef = storage.ref()

// firebase.getCurrentUser = () => {
//     return new Promise((resolve, reject) => {
//             const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//                 unsubscribe();
//                 resolve(user);
//             }, reject);
//         }
//     )};
