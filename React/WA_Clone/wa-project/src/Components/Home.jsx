// rfce
import React from 'react'
import { storage } from '../../firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import ChatPanel from './ChatPanel';
import ChatWindow from './ChatWindow';

function Home() {

  return (
    <main className='relative w-full h-screen bg-[#E3E1DB]'>

      <div className='absolute top-0 h-[130px] bg-red-700 w-full'></div> 
      <div className='h-screen absolute w-full p-5'>
        <div className='bg-background w-full h-full shadow-md flex'>
          {/* conditional part -> chat list, profile */}
          <ChatPanel/>

          <ChatWindow></ChatWindow>
        </div>
      </div>
      
    </main>
  )
}

export default Home