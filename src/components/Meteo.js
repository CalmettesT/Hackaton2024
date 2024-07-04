import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '785efc97c365bae6a359c33c7c38aced';
    const city = 'Tarbes';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
      .then(response => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10 text-xl text-gray-500">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-xl text-red-500">Error: {error.message}</div>;

  return (
    <div className="max-w-sm mx-auto mt-10 mb-16 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Météo à {weather.name}</h2>
        <p className="text-gray-600 mt-4">Température: <span className="text-gray-900">{weather.main.temp}°C</span></p>
        <p className="text-gray-600">Humidité: <span className="text-gray-900">{weather.main.humidity}%</span></p>
        <p className="text-gray-600">Conditions: <span className="text-gray-900 capitalize">{weather.weather[0].description}</span></p>
      </div>
    </div>
  );
};

export default WeatherComponent;
