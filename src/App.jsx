import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";


const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      })
      setLocation('')
    }
  }

  return (
    <div className="app">

      {/* Search Bar */}
      <SearchBar location={location} setLocation={setLocation} searchLocation={searchLocation} />

      <div className="container">
        {/* Current weather */}
        <CurrentWeather data={data} isLoading={isLoading}/>


        {isLoading ? <p>Loading...</p> :
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default App;