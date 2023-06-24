/* eslint-disable react/prop-types */

const CurrentWeather = ({data, isLoading}) => {
    return (
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {isLoading ? <p>Loading...</p> : <h1>{data.main.temp.toFixed()}°F</h1>}
          </div>
          <div className="description">
            {isLoading ? <p>Loading...</p> : <p>{data.weather[0].main}</p>}
          </div>
        </div>
    );
};

export default CurrentWeather;