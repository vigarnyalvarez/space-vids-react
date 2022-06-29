import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyDD3KMgHn5rmmb_SOFyuemQitRk8vCvVt8",
  authDomain: "space-vids-dev.firebaseapp.com",
  projectId: "space-vids-dev",
  storageBucket: "space-vids-dev.appspot.com",
  messagingSenderId: "975750558742",
  appId: "1:975750558742:web:25780d869245bb46f07137"
})


export const auth = app.auth();
export default app;

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     console.log("User is signed in");
//     console.log(user)
//   } else {
//     // User is signed out
//     console.log("User is signed out");
//   }
// })



