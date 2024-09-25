import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase.config';
import { CircleFadingPlusIcon } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { UserRoundIcon } from 'lucide-react';

import Profile from './Profile';
import UserCard from './UserCard';


function ChatPanel() {
    {/* we need to bring list of user from firebase */}

    const [ users, setUsers ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const [ showProfile, setShowProfile ] = useState(false);

    useEffect( ()=> {
        const getUsers = async () => {
            // get data form firebase
            const snapshot = await getDocs(collection(db, "users"));

            console.log(snapshot.docs.length);
            const arrayOfUsers = snapshot.docs.map((docs) => { return { userData: docs.data(), id: docs.id } });
            console.log(arrayOfUsers);
            setUsers(arrayOfUsers);
            setLoading(false);
        };

        getUsers();
    }, [])

    const onBack = () => { setShowProfile(false) };

    if(showProfile == true) {
        return <Profile onBack={onBack}/>
    }


    return (
        <div className='bg-white w-[30vw]'>
            {/* top-bar */}
            <div className="bg-background py-2 px-4 border-r flex justify-between items-center gap-2">
                <button onClick={ ()=> { setShowProfile(true) }}>
                    <img
                        src={"/default-user.png"}
                        alt="profile picture"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </button>


                <div className="flex items-end justify-center gap-6 mx-4">
                    <CircleFadingPlusIcon className="w-6 h-6" />
                    <MessageSquare className="w-6 h-6" />
                    <UserRoundIcon className="w-6 h-6" />
                </div>
            </div>
            {/* chat list */}
            {
                isLoading ? <div>Loading...</div> :
                <div className='flex flex-col gap-3'>
                    {users.map(userObject => (
                        <UserCard userObject={userObject}></UserCard> 
                    ))}
                </div> 
            }          
        </div>
    )
}

export default ChatPanel