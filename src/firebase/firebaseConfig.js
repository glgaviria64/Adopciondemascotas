import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAJ_Gxcbeav5B887IeNyXHxrxAWfNjC2A",
    authDomain: "petsapp-ae1d2.firebaseapp.com",
    projectId: "petsapp-ae1d2",
    storageBucket: "petsapp-ae1d2.appspot.com",
    messagingSenderId: "588105734524",
    appId: "1:588105734524:web:df3f85c5bd358f6293acf9"
  };

  const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider();

export default app