/* eslint-disable react/prop-types */

const Forecast = ({ data }) => {
    return (
        <div className="bottom">
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
    );
};

export default Forecast;