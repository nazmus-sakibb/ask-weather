import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true); // Set loading state to true before making the API request
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        })
        .finally(() => {
          setIsLoading(false); // Set loading state to false when the API request is completed (success or error)
        });

      setLocation('');
    }
  };

  return (
    <div className="app">
      <SearchBar location={location} setLocation={setLocation} searchLocation={searchLocation} />
      <div className="container">
        {isLoading ? (
          <p>Loading...</p> // Render loading indicators when data is being fetched
        ) : (
          <>
            <CurrentWeather data={data} isLoading={isLoading} />
            <div className="bottom">
              {/* Render additional components when data is available */}
              <div className="feels">
                {data.main && <p className="bold">{data.main.feels_like.toFixed()}°C</p>}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main && <p className="bold">{data.main.humidity}%</p>}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind && <p className="bold">{data.wind.speed.toFixed()} MPH</p>}
                <p>Wind Speed</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
