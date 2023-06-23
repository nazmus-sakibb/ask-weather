import axios from 'axios';

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=25aea6110b7561ce2e7bd38ff9924d60`


  return (
    <div className='app'>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>32°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>38°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>20 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
