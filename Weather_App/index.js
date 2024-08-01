// select
const searchBtn = document.querySelector("#search");
const searchInput = document.querySelector("#input");
const temperature = document.querySelector(".temperature");
const locationElem = document.querySelector(".location");
const icon = document.querySelector(".icon");
// add event listner
searchBtn.addEventListener("click", async() => {
    // alert("clicked");
    // select value
    const location = searchInput.value;
    // check for empty
    if (location != "") {
        // data get
        const data = await fetchWeather(location);
        // update data inside my dom
        if(data==null) {
            // do nothing
        } else {
            updateDOM(data);
        }
        
        searchInput.value = "";
    }
})

function updateDOM(data) {
    /********************* Filter required data ********************************/
    console.log("I will update the UI with this data", data);
    const temp = data.current.temp_c;
    const location = data.location.name;
    const timeData = data.location.localtime;
    const [date, time] = timeData.split(" ");
    const iconLink = data.current.condition.icon;
    const condition = data.current.condition.text;
    console.log("temp :",temp, "location :",location, "date :",date);
    console.log("time :",time, "icon :",iconLink, "condition :",condition);


     /********************* Update the DOM *****************************/
    temperature.textContent = temp;
    locationElem.textContent = location;
    icon.src = iconLink;


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

// search button -> click -> input get value -> fetchWeather -> update the UI

/******
 * HTTP packet -> Header -> metadata, status, body -> data
 * 200 -> success
 * 404 -> page not found
 * 400 -> bad request
 * (100-500) fao oi
 * ******/ 