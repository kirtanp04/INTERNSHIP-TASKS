import firebase from 'firebase/compat/app'
import 'firebase/compat/database'



const firebaseConfig = {
    apiKey: "AIzaSyAdLPDDplNAPmhmyqw86ROSdwolxrD7Brc",
    authDomain: "signup-data-93388.firebaseapp.com",
    projectId: "signup-data-93388",
    storageBucket: "signup-data-93388.appspot.com",
    messagingSenderId: "1021128966170",
    appId: "1:1021128966170:web:3a59c18f4daf621b56d1a3"
  };

  firebase.initializeApp(firebaseConfig)
  export const dataref= firebase.database()
  // eslint-disable-next-line import/no-anonymous-default-export
  export default firebase;
