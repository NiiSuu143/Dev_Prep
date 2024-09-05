
function App() {
  return (
    <>
      <header>
        <div className="input-container">
            <input type="text" name="" id="input" placeholder="Enter Location"/>
            <button id="search">Search</button>
        </div>
    </header>
    <main>
        <div className="weather-container">
            <div className="temperature">21.2</div>
            <div classname="location-date">
                <div className="location">Manipur</div>
                <span className="time">10:00</span>
                <span className="day">Wednesday</span>
                <span className="date">17/07/2024</span>
            </div>
            <div className="weather-state">
                <img src="./sunny.png" alt="image" height="30px" className="icon"/>
                <div className="condition">Sunny</div>
            </div>
        </div>
        
    </main>
    </>
  )
}

export default App
