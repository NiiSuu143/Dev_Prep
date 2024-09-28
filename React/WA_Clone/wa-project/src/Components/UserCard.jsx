import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function UserCard(props) {
    const { userObject } = props;
    const params = useParams();
    const isActive = params?.chatId === userObject.id;

  return (
    <Link 
      key={userObject.id} 
      className={`flex gap-4 items-center hover:bg-background p-2 rounded cursor-pointer  ${isActive && "bg-background"}`} to={`/${userObject.id}`}
    >
        <img 
          src={userObject.userData.profile_pic} 
          referrerPolicy="no-referrer" 
          alt="profile_pic" 
          className='w-12 h-12 object-cover rounded-full'
        />
        <h2>{userObject.userData.name}</h2>
    </Link>
  )
}

export default UserCard