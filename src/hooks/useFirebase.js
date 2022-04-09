import { useEffect, useState } from "react"
import App from "../firebase_init"
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';

const auth = getAuth(App)
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    },[])

    return { user, signInWithGoogle, handleSignOut };
}

export default useFirebase;