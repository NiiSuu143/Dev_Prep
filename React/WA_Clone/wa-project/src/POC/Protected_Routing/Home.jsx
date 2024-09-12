import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';

function Home(props) {
    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
    const handleLogout = async()=> {
      // logout wala logic
      await signOut(auth);
        setIsLoggedIn(false);
        // alert = "Logout";
        navigate("/login");
    }
  return (
    <>
        <div>Home</div>
        <button onClick={handleLogout}>Logout</button>
    </>
    
  )
}

export default Home