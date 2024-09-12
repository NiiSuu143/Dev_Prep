import React from 'react'
import { useNavigate } from 'react-router-dom';
// auth -> step-3
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

function Login(props) {
    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();

    const handleLogIn = async()=> {
      // login wala logic yaha pe likhna hai
      
      // auth -> step-4
      const result = await signInWithPopup(auth, new GoogleAuthProvider);
      console.log(result);
      
      setIsLoggedIn(true);
      navigate("/")
      // alert("LogIn");
    }
  return (
    <>
        <div>Login</div>
        <button onClick={handleLogIn}>Login</button>
    </>
  )
}

export default Login