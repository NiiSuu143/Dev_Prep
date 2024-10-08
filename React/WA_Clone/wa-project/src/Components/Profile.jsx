import React from 'react'
import { ArrowLeft, CheckIcon, Edit2Icon, Loader2Icon } from 'lucide-react';
import { useAuth } from './AuthContext';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';
import { useState } from 'react';

function Profile(props) {
    const { userData, updateName, updateStatus, updatePhoto, isUploading, error } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState(userData?.name||"");
    const [status, setStatus] = useState(userData?.status||"");

    const handleLogout = () => {
        signOut(auth);
        navigate("/login");
    }
  return <div className='bg-background w-[30vw]'>
            <div className='bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6'>
                <button onClick={props.onBack}>
                    <ArrowLeft/>
                </button>
                Profile
            </div>
            
            <div className='flex flex-col items-center justify-center gap-8 mt-8'>
                <label className={`group relative rounded-full overflow-hidden cursor-pointer ${isUploading ?"pointer-events-none":""}`}>
                    <img src={userData.profile_pic} 
                        referrerPolicy="no-referrer" alt="" 
                        className='w-[160px] h-[160px] object-cover rounded-full'
                    />
                    <input
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        className="hidden"
                        onChange={(e) => {
                            updatePhoto(e.target.files?.[0]);
                        }}
                    />
                    {isUploading ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10">
                            <Loader2Icon className="w-6 h-6 text-primary-dense animate-spin z-10" />
                        </div>
                    ) : (
                        <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/30 z-10">
                            <Edit2Icon className="w-6 h-6 text-white" />
                        </div>
                    )}
                </label>
                
                {!error && <p className="text-red-600 text-sm">{error}</p>}

                {/* Your Name */}
                <div className='flex flex-col bg-white w-full py-4 px-8'>
                    <label className='text-sm text-primary-dense mb-2'>Your name</label>
                    <div className='flex items-center w-full'>
                        <input
                            value={name} 
                            className='w-full bg-transparent' 
                            placeholder='Update your name...'
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <button onClick={() => {updateName(name)}}>
                            <CheckIcon className='w-5 h-5'/>
                        </button>
                    </div>
                </div>

                {/* ... other user data */}
                {/* <div className="flex flex-col bg-white w-full py-4 px-8">
                    <label className="text-sm text-primary-dense mb-2">Phone number</label>
                    <div className="flex items-center w-full">
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className="w-full bg-transparent"
                        />
                        <button onClick={() => updateName(name)}>
                            <CheckIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div> */}

                {/* For Status */}
                <div className='flex flex-col bg-white w-full py-4 px-8'>
                    <label className='text-sm text-primary-dense mb-2'>Status</label>
                    <div className='flex items-center w-full'>
                        <input 
                            value={status}
                            className='w-full bg-transparent'
                            placeholder='Update your status...' 
                            onChange={(e) => {
                                setStatus(e.target.value);
                            }}
                        />
                        <button onClick={() => {updateStatus(status)}}>
                            <CheckIcon className='w-5 h-5'/>
                        </button>
                    </div>
                </div>
                <button onClick={handleLogout} className='text-white px-4 py-3 rounded-[5px] bg-primary hover:bg-primary-dense'>Logout</button>
            </div>
          </div>
}

export default Profile