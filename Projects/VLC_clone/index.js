
const videobtn = document.querySelector("#videobtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");
const VLCicon = document.querySelector("#vlc-icon");
const totalTimeElem = document.querySelector("#totalTime");
const currentTimeElem = document.querySelector("#currentTime");
const slider = document.querySelector("#slider");


let  video = ""
let duration;
let timerObj;
let currentPlayTime = 0;
let isPlaying = false;

const handleInput = ()=> {
    console.log("input is selected")
    // you have to click that button
    videoInput.click();
}

const acceptInputHandler = (obj)=> {
    // console.log("file is selected");
    // console.log("obj", ob.target.files);
    // to get file selected
    // const selectedVideo = obj.target.files[0];
    let selectedVideo;
    if (obj.type == "drop") {
        selectedVideo = obj.dataTransfer.files[0]

    } else {
        selectedVideo = obj.target.files[0];

    }
    // console.log("selected file", selectedFiles)
    // src -> base64
    const link = URL.createObjectURL(selectedVideo);

    const videoElement = document.createElement("video");
    videoElement.src = link;
    videoElement.setAttribute("class","video");
    // check if there are any video already present
    if (videoPlayer.children.length > 0) {

        // if present -> remove it 
        videoPlayer.removeChild(videoPlayer.children[0]);
    }
    videoPlayer.appendChild(videoElement);
    video = videoElement;
    isPlaying = true;
    // videoElement.controls="true";
    videoElement.play();
    videoElement.volume = 0.3;
    // console.log("duration of the video", video.duration);

    videoElement.addEventListener("loadedmetadata", function(){
        // your time will there
         // it gives in decimal value -> convert that into seconds
         duration = Math.round(videoElement.duration);
         // convert seconds into hrs:mins:secs
         let time = timeFormat(duration);
         totalTimeElem.innerText = time;
         slider.setAttribute("max", duration);
         startTimer();
    })
    VLCicon.style.display = "none";

}

videobtn.addEventListener("click", handleInput);
// when file is selected
videoInput.addEventListener("change", acceptInputHandler);


/*****volume and speed *******/
const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUP = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const toast = document.querySelector(".toast");

const speedUpHandler =()=> {
    // alert("speedUp is clicked");
    // video -> speed increase
        // * where is the video 
    // which property you will use to increase its video
        // * how much you want to increase
    const videoElement = document.querySelector("video");

    if(videoElement==null) {
        // video is not present then
        return;
    }
    if(videoElement.playbackRate > 3) {
        return;
    }
    const increaseSpeed = videoElement.playbackRate + 0.5;
    videoElement.playbackRate = increaseSpeed;
    console.log("Increase Speed", increaseSpeed);
    showToast(increaseSpeed + "X");
}

const speedDownHandler = () => {
    const videoElement = document.querySelector("video");

    if(videoElement == null) {
        return;
    }
    if(videoElement.playbackRate > 0) {
        const decreaseSpeed = videoElement.playbackRate - 0.5;
        console.log("Decrease Speed", decreaseSpeed);
        videoElement.playbackRate = decreaseSpeed;
        showToast(decreaseSpeed + "X");
    }
    
}

const volumeUpHandler = () => {
    // alert("clicked");
    // select the video
    const videoElement = document.querySelector("video");
    if(videoElement == null) {
        return;
    }
    if(videoElement.volume >= 0.9) {
        return;
    }
    const increaseVolume = videoElement.volume + 0.1;
    console.log("Increase Volume", increaseVolume);
    videoElement.volume = increaseVolume;
    const percentage = (increaseVolume*100) + "%";
    showToast(percentage);
}

const volumeDownHandler = () => {
    // alert("clicked");
    // select the video
    const videoElement = document.querySelector("video");
    if(videoElement == null) {
        return;
    }
    if(videoElement.volume <= 0.1) {
        videoElement.volume = 0;
        return;
    }
    const decreaseVolume = videoElement.volume - 0.1;
    console.log("Decrease Volume", decreaseVolume);
    videoElement.volume = decreaseVolume;
    const percentage = (decreaseVolume*100) + "%";
    showToast(percentage);
}

function showToast(message) {
    // toast show
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 1500)
}

// identify on which event your logic should trigger
speedUp.addEventListener("click", speedUpHandler);
speedDown.addEventListener("click", speedDownHandler);
volumeUP.addEventListener("click", volumeUpHandler);
volumeDown.addEventListener("click", volumeDownHandler);


/****** Controls **************/
const playbtn = document.querySelector(".playbtn");
const fullScreen = document.querySelector("#fullScreen");

const handleFullScreen = () => {
    videoPlayer.requestFullscreen();
}

fullScreen.addEventListener("click", handleFullScreen);

// adding seek behavior in slider
slider.addEventListener("change", function (e) {
    let value = e.target.value;
    video.currentTime = value;
})

/***********forward and backward button*************/
function forward() {
    currentPlayTime = Math.round(video.currentTime) + 5;
    video.currentTime = currentPlayTime;
    slider.setAttribute("value", currentPlayTime);
    showToast("Forward by 5 sec");
    let time = timeFormat(currentPlayTime);
    currentTimeElem.innerText = time;
}

function backward() {
    currentPlayTime = Math.round(video.currentTime) - 5;
    video.currentTime = currentPlayTime;
    slider.setAttribute("value", currentPlayTime);
    showToast("Backward by 5 sec");
    let time = timeFormat(currentPlayTime);
    currentTimeElem.innerText = time;
}


const forwardBtn = document.querySelector("#forwardBtn");
const backwardBtn = document.querySelector("#backBtn");
forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);
/****************play pause********************/
const playPauseContainer = document.querySelector("#playPause");
function setPlayPause() {
    if (isPlaying === true) {
        playPauseContainer.innerHTML = `<i class="fas fa-pause state"></i>`;
        video.play();
    }
    else {
        playPauseContainer.innerHTML = `<i class="fas fa-play state"></i>`;
        video.pause();
    }
}

playPauseContainer.addEventListener("click", function (e) {
    if (video) {
        isPlaying = !isPlaying;
        setPlayPause();
    }
})

/******stop btn********/
const stopBtn = document.querySelector("#stopBtn");
const stopHandler = () => {
    if (video) {
        // remove the video from ui 
        video.remove();
        // reset all the varibales
        isPlaying = false;
        currentPlayTime = 0;
        slider.value = 0;
        video = "";
        duration = "";
        totalTimeElem.innerText = '--/--';
        currentTimeElem.innerText = '00:00';
        slider.setAttribute("value", 0);
        stopTimer();
        setPlayPause();
    }
}

stopBtn.addEventListener("click", stopHandler)

/***************utility function to convert secs into hrs :mns : seconds*****************/
function timeFormat(timeCount) {
    let time = '';
    const sec = parseInt(timeCount, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds
    time = `${hours}:${minutes}:${seconds}`;
    return time;
}

// function that runs the slider and timer  
function startTimer() {
    timerObj = setInterval(function () {
        currentPlayTime = Math.round(video.currentTime);
        slider.value = currentPlayTime;
        const time = timeFormat(currentPlayTime);
        currentTimeElem.innerText = time;
        if (currentPlayTime == duration) {
            state = "pause";
            stopTimer();
            setPlayPause();
            video.remove();
            slider.value = 0;
            currentTimeElem.innerText = "00:00:00";
            totalTimeElem.innerText = '--/--/--';
        }
    }, 1000);
}
function stopTimer() {
    clearInterval(timerObj);
}



/**********************enable drag and drop**********************/
// Prevent default behavior for dragover and dragleave events
videoPlayer.addEventListener('dragenter', (e) => {
    e.preventDefault();
})

videoPlayer.addEventListener('dragover', (e) => {
    e.preventDefault();
})

videoPlayer.addEventListener('dragleave', (e) => {
    e.preventDefault();
})


videoPlayer.addEventListener('drop', (e) => {
    e.preventDefault();
    acceptInputHandler(e);
})




/*********keyboard support***************/
const body = document.querySelector("body");
// keyboard inputs
body.addEventListener("keyup", function (e) {
    console.log(e.key);
    if (!video) return;
    if (e.code == "Space") {
        isPlaying = !isPlaying
        setPlayPause();
    }
    else if (e.key == "ArrowUp" ) {
        volumeUpHandler()
    }
    else if (e.key == "ArrowDown") {
        volumeDownHandler();
    }
    else if (e.key == "+") {
        speedUpHandler();
    }
    else if (e.key == "-") {
        speedDownhandler();
    }
    else if (e.key == "ArrowRight") {
        forward();
    }
    else if (e.key == "ArrowLeft") {
        backward();
    }
})
