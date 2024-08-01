const inputLocation = document.querySelector("#locationInput");
const searchBtn = document.querySelector(".searchBtn");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temp")
const condition = document.querySelector(".condition");
const conditionImg = document.querySelector(".conditionImg");
const day = document.querySelector(".day");
const todayDate = document.querySelector(".date");
const todayTime = document.querySelector(".dateTime");
const currentLocation = document.querySelector(".mainLocation");


searchBtn.addEventListener("click", async() => {
    // alert("I am clicked");
    const location = inputLocation.value;
    console.log(location);
    if (location != "") {
        // data get
        const data = await fetchWeather(location);
        // update data inside my dom
        if(data==null) {
            // do nothing
        } else {
            updateDOM(data);
        }
        
        inputLocation.value = "";
    }
})

function updateDOM(data) {
    console.log("data", data);
    const temp = data.current.temp_c;
    const location = data.location.name;
    const timeData = data.location.localtime;
    const [date, time] = timeData.split(" ");
    const iconLink = data.current.condition.icon;
    const cond = data.current.condition.text;

    console.log("temp :",temp, "location :",location, "date :",date);
    console.log("time :",time, "icon :",iconLink, "condition :",condition);

    /*********Update DOM***********/
    currentLocation.textContent = location;
    temperature.textContent = temp;
    condition.textContent = cond.split(" ");
    conditionImg.src = iconLink;
    todayTime.textContent = timeData;
     
}

async function fetchWeather(location) {
    const url = `http://api.weatherapi.com/v1/current.json?key=7da0731d4f83417db6e155626241607&q=${location}&aqi=no`
    // fetch -> inbuild function to get http response from the server
    const response = await fetch(url);
    console.log(response);
    if (response.status == 400) {
        alert("Data not found");
        return null;
    } else if (response.status == 200){
        const json = await response.json();
        // console.log(json);
        return json;
    }
}