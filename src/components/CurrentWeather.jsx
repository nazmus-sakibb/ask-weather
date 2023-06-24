import React from 'react';

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { location, current } = weatherData;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Location: {location.name}, {location.region}, {location.country}</p>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Condition: {current.condition.text}</p>
    </div>
  );
};

export default CurrentWeather;
