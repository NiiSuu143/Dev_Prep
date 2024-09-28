import { useContext, useEffect } from "react";
import React from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { storage } from "../../firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// 1
const AuthContext = React.createContext();

export function useAuth() {
    // 3
    return useContext(AuthContext);
}

function AuthWrapper({children}) {
    const [ userData, setUserData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // checking if user is exist? as if u have log in before
        const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
            setLoading(true);
            if(currentUser) {
                const docref = doc(db, "users", currentUser?.uid);
                const docSnap = await getDoc(docref);
                if(docSnap.exists()) {
                    const { profile_pic, name, email, lastSeen, status } = docSnap.data();
                    console.log("user", docSnap.data());
                    // context mein jake save kar dia hai user ka data
                    await setLastSeen(currentUser);
                    setUserData({
                    id: currentUser.uid,
                    profile_pic,
                    email,
                    name, 
                    lastSeen,
                    status:  status ? status : ""
                    });
                }
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // update lastSeen
    const setLastSeen = async(user) => {
        const date = new Date();
        const timeStamp = date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            month: "short"
        });
        await updateDoc(doc(db, "users", user.uid), {
            lastSeen: timeStamp,
        });
    }

    // update User Name of profile
    const updateName = async(newName) => {
        await updateDoc(doc(db, "users", userData.id), {
            name: newName
        })
    }

    // update User status of profile
    const updateStatus = async(newStatus) => {
        await updateDoc(doc(db, "users", userData.id), {
            status: newStatus
        })
    }

    const updatePhoto = async (img) => {
        const storageRef = ref(storage, `profile/${userData.id}`);
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
            "state_changed",
            () => {
                // on State Changed
                setIsUploading(true);
                setError(null);
                console.log("upload started");
            },
            () => {
                // on Error
                setError("Unable to Upload!");
                setIsUploading(false);
                alert("Unable to Upload!");
            },
            () => {
                // on Success
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateDoc(doc(db, "users", userData.id), {
                        profile_pic: downloadURL,
                    });
                    setUserData({
                        ...userData,
                        profile_pic: downloadURL,
                    });
                    setIsUploading(false);
                    setError(null);
                });
            }
        );
    };

    return <AuthContext.Provider value={{ setUserData, userData, loading, updateName, updateStatus, updatePhoto, isUploading, error }}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper;