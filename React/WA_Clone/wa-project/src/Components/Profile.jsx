import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { useAuth } from './AuthContext';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';

function Profile(props) {
    const { userData } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth);
        navigate("/login");
    }
  return <div className='bg-white w-[30vw]'>
            <div className='bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6'>
                <button onClick={props.onBack}>
                    <ArrowLeft/>
                </button>
                Profile
            </div>
            
            <div className='bg-green-100'>
                <img src={userData.profile_pic} referrerPolicy="no-referrer" alt="" className='rounded-full h-10 w-10'/>
                <h2>{userData.name}</h2>
                <h2>{userData.email}</h2>
                <button onClick={handleLogout} className='text-white px-4 py-3 rounded-[5px] bg-primary hover:bg-primaryDense'>Logout</button>
            </div>
          </div>
}

export default Profile