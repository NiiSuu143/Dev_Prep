import { useState } from "react";
import "./app.css"

function App() {
  const [value, setValue] = useState("");
  const [weatherObj, setWeatherObj] = useState({
    temp: "--",
    location: "--",
    date: "--",
    time: "--",
    condition: "--",
    src: null
  });
  
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

  const handleClick = async () => {
    console.log("Button is clicked");
    // get the value of the location
    if(value != "") {
      // you need to make the request
      const data = await fetchWeather(value);
      if(data==null) {
        alert("no data is found in this location");
        return;
      }
      // after getting the data -> data extract
      const temp = data.current.temp_c;
      const location = data.location.name;
      const timeData = data.location.localtime;
      const [date, time] = timeData.split(" ");
      const iconLink = data.current.condition.icon;
      const condition = data.current.condition.text;
      // update the state
      let newobj = {
        "temp": temp,
        "location": location,
        "date": date,
        "time": time,
        "condition": condition,
        "src": iconLink
      }
      setWeatherObj(newobj);
    } else {
      alert("Location can't be empty");
    }    
  }
  const handleInput = (e) => {
    setValue(e.target.value);
  }
  return (
    <>
      <header className="h-[150px] bg-[#2c3e50] flex justify-center items-center">
        <div id="input-container" className="w-[60%] flex justify-between">
            <input type="text" name="" id="input" placeholder="Enter Location" 
            className="text-white text-lg bg-transparent outline-none py-4 px-0 border-b-2 border-b-solid border-white w-[84%]" 
            onChange={handleInput}/>
            <button id="search" className="bg-[#44ad96] text-lg text-white border-none py-4 px-8 cursor-pointer"
            onClick={handleClick}>Search</button>
        </div>
    </header>
    <main className="flex bg-[#01161E] justify-center items-center text-white h-[calc(100vh-150px)]">
        <div id="weather-container" className="flex gap-4 items-center h-[5rem]">
            <div id="temperature">{weatherObj.temp}°C</div>
            <div id="location-date">
                <div id="location" className="text-[2rem] mb-[1.6rem]">{weatherObj.location}</div>
                <span id="time">{weatherObj.time}</span>
                <span id="day">Wednesday</span>
                <span id="date">{weatherObj.date}</span>
            </div>
            <div id="weather-state">
                <img src={weatherObj.src} alt="image" height="30px" id="icon"/>
                <div id="condition" className="text-center">{weatherObj.condition}</div>
            </div>
        </div>
      </main>
    </>
  )
}

export default App
