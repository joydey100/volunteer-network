import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebaseInitialize from "../Firebase/firebase-init";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //   Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    setUser,
    googleSignIn,
    loading,
    setLoading,
    logOut,
  };
};

export default useFirebase;
