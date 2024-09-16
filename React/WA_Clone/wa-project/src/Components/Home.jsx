// rfce
import React from 'react'
import { storage } from '../../firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

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
    <>
      <div>Home</div>
      <input type="file" 
        accept='image/png image/jpg image/webp'
        onChange={handleChange}
      ></input>
    </>
  )
}

export default Home