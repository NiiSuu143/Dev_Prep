// rfce
import React from 'react'
import { storage } from '../../firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import ChatPanel from './ChatPanel';
import ChatWindow from './ChatWindow';

function Home() {

  const handleChange = (e) => {
    const img = e.target.files[0];

    // address
    const storageRef = ref(storage,"/profile" + Math.random());

    // storage task
    const uploadTask = uploadBytesResumable(storageRef, img);

    // developer
    uploadTask.on("state_changed", progressCB, errorCB, finishedCB);

    // upload
    function progressCB(data) {
      console.log("data", data);
    }
    // if error
    function errorCB(err) {
      console.log(err);
    }
    // on success
    function finishedCB() {
      console.log("successfully file uploaded...");
      getDownloadURL(uploadTask.snapshot.ref).then(function(url){
        console.log("url",url);
      })
    }
  }

  return (
    <main className='h-screen bg-[#E3E1DB]'>
      {/* <input type="file" 
        accept='image/png image/jpg image/webp'
        onChange={handleChange}
      ></input> */}

      {/* conditional part -> chat list, profile */}
      <div className='bg-background w-full h-screen shadow-md flex'>
      <ChatPanel/>

      <ChatWindow></ChatWindow>
      </div>

      {/* 
      1. chat panel Profile Button click -> then it should open
      2. currently loggedIn user ka data
       */}
      {/* <div>Profile</div>

      <div>Empty Chat</div>
      <div>Idividual Chat</div> */}
    </main>
  )
}

export default Home