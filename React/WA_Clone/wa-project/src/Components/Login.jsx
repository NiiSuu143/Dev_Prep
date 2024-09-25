// rfce
import React from 'react'
import { Fingerprint, LogIn as LoginIcon } from 'lucide-react';
// auth -> step-3
import { signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



async function createUser(authData) {
  const userObject = authData.user;
  // const id = userObject.uid;
  // const photoURL = userObject.photoURL;
  // const name = userObject.displayName;
  // const email = userObject.email;
  const { uid, photoURL, displayName, email } = userObject;
  // data added at firebase
  await setDoc(doc(db, "users" ,uid), {
    email,
    profile_pic:photoURL,
    name:displayName
  })
  // console.log("user is added");
}

function Login() {
  const navigate = useNavigate();
  const handleLogIn = async()=> {
    // login wala logic yaha pe likhna hai
    // auth -> step-4
    const userData = await signInWithPopup(auth, new GoogleAuthProvider);
    await createUser(userData);
    navigate("/");
  }

  return (
    <>
    <div className='h-[220px] bg-primary'>
      <div className='flex ml-[200px] pt-[40px] items-center gap-4'>
        <img src="https://whatsapp-clone-826a9.web.app/whatsapp.svg" alt="" className='h-10' />
        <div className='text-white uppercase font-large'>Whatsapp Web</div>
      </div>
    </div>
    <div className='bg-background h-[calc(100vh-220px)] flex justify-center items-center relative'>
      <div className='h-[100%] w-[55%] bg-white shadow-2xl flex flex-col gap-9 justify-center items-center absolute -top-[93px]'>
        <Fingerprint className='h-[100px] w-[100px] text-primary'strokeWidth={1}/> 
        <div className='flex flex-col justify-center items-center'>
          <div className='text-2xl font-medium mb-2'>Sign In</div>
          <div className='text-xs font-light text-slate-500 text-center '>Sign in with your google account <br /> to get started.</div>
        </div>
        <button onClick={handleLogIn} className='flex gap-2 items-center bg-primary p-3 text-white rounded-[5px]'>
          <div>Sign in with Google</div>
          <LoginIcon className='h-[20px]'/>
        </button>
      </div>
    </div>
    </>
  )
}

export default Login