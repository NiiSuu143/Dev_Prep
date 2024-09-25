import { useContext, useEffect } from "react";
import React from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { doc, getDoc } from "firebase/firestore";

// 1
const AuthContext = React.createContext();

export function useAuth() {
    // 3
    return useContext(AuthContext);
}

function AuthWrapper({children}) {
    const [ userData, setUserData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        // checking if user is exist? as if u have log in before
        const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
            setLoading(true);
            if(currentUser) {
                const docref = doc(db, "users", currentUser?.uid);
                const docSnap = await getDoc(docref);
                if(docSnap.exists()) {
                    const { profile_pic, name, email } = docSnap.data();
                    console.log("user", docSnap.data());
                    setUserData({
                    id: currentUser.uid,
                    profile_pic,
                    email,
                    name
                    });
                }
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return <AuthContext.Provider value={{ setUserData, userData, loading }}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper;