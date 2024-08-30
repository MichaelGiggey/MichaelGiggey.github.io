import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'weather-icons/css/weather-icons.css'; // Import Weather Icons CSS
import styles from './Weather.module.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeatherData = async (lat, lon) => {
      try {
        // Fetch current weather
        const currentWeatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);

        // Fetch hourly forecast
        const hourlyForecastResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode`);

        // Fetch daily forecast
        const dailyForecastResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/London`);

        setWeather(currentWeatherResponse.data.current_weather);
        setHourlyForecast(hourlyForecastResponse.data.hourly);
        setDailyForecast(dailyForecastResponse.data.daily);
        setError('');
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      }
    };

    if (latitude && longitude) {
      fetchWeatherData(latitude, longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, (error) => {
        setError('Failed to get current location. Please turn on location in browser settings or search city');
      });
    }
  }, [latitude, longitude]);

  const handleCitySearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?city=${city}&format=json&limit=1`);
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setLatitude(lat);
        setLongitude(lon);
      } else {
        setError('City not found. Please try again.');
      }
    } catch (err) {
      setError('Failed to fetch data. Please turn on Location, Enter City, or Try Again Later.');
    }
  };

  const weatherConditions = {
    0: { label: 'Clear sky', icon: 'wi wi-day-sunny' },
    1: { label: 'Mainly clear', icon: 'wi wi-day-cloudy' },
    2: { label: 'Partly cloudy', icon: 'wi wi-day-cloudy' },
    3: { label: 'Overcast', icon: 'wi wi-cloudy' },
    45: { label: 'Fog', icon: 'wi wi-fog' },
    48: { label: 'Depositing rime fog', icon: 'wi wi-fog' },
    51: { label: 'Drizzle: Light', icon: 'wi wi-sprinkle' },
    53: { label: 'Drizzle: Moderate', icon: 'wi wi-sprinkle' },
    55: { label: 'Drizzle: Dense intensity', icon: 'wi wi-sprinkle' },
    56: { label: 'Freezing Drizzle: Light', icon: 'wi wi-snow' },
    57: { label: 'Freezing Drizzle: Dense intensity', icon: 'wi wi-snow' },
    61: { label: 'Rain: Slight', icon: 'wi wi-rain' },
    63: { label: 'Rain: Moderate', icon: 'wi wi-rain' },
    65: { label: 'Rain: Heavy intensity', icon: 'wi wi-rain' },
    66: { label: 'Freezing Rain: Light', icon: 'wi wi-snow' },
    67: { label: 'Freezing Rain: Heavy intensity', icon: 'wi wi-snow' },
    71: { label: 'Snow fall: Slight', icon: 'wi wi-snow' },
    73: { label: 'Snow fall: Moderate', icon: 'wi wi-snow' },
    75: { label: 'Snow fall: Heavy intensity', icon: 'wi wi-snow' },
    77: { label: 'Snow grains', icon: 'wi wi-snow' },
    80: { label: 'Rain showers: Slight', icon: 'wi wi-showers' },
    81: { label: 'Rain showers: Moderate', icon: 'wi wi-showers' },
    82: { label: 'Rain showers: Violent', icon: 'wi wi-showers' },
    85: { label: 'Snow showers slight', icon: 'wi wi-snow' },
    86: { label: 'Snow showers heavy', icon: 'wi wi-snow' },
    95: { label: 'Thunderstorm: Slight or moderate', icon: 'wi wi-thunderstorm' },
    96: { label: 'Thunderstorm with slight hail', icon: 'wi wi-thunderstorm' },
    99: { label: 'Thunderstorm with heavy hail', icon: 'wi wi-thunderstorm' },
  };

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.scrollBar}>
        <h1>Weather App</h1>
        <p className={styles.intro}>
          A real-time weather application that provides current weather and forecasts using a public API.
        </p>

        <form onSubmit={handleCitySearch}>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>

        {error && <p className={styles.error}>{error}</p>}
        {weather && (
          <div className={styles.currentWeatherInfo}>
            <h2>
              Current Weather in {city || 'your Current Location'}
            </h2>
            <p>
              Temperature: {Math.floor(weather.temperature) || 'N/A'} °C
            </p>
            <p>
              <i className={`wi ${weatherConditions[weather.weathercode]?.icon || ''}`}>
              </i>
              <br />
              {weatherConditions[weather.weathercode]?.label || 'N/A'}
            </p>
          </div>
        )}

        {dailyForecast && (
          <div className={styles.dailyForecastContainer}>
            <h2>7-Day Forecast</h2>
            <ul>
              {dailyForecast.time && dailyForecast.time.slice(0, 7).map((date, index) => {
                // Convert the date to the day of the week
                const day = new Date(date).toLocaleDateString([], { weekday: 'long' });

                return (
                  <li key={index} className={styles.forecast}>
                    <strong>{day}</strong>
                    <br />
                    {weatherConditions[dailyForecast.weathercode[index]]?.label || 'N/A'}
                    <br />
                    <i className={`wi ${weatherConditions[dailyForecast.weathercode[index]]?.icon || ''}`}>
                    </i>
                    <br />
                    High: {Math.floor(dailyForecast.temperature_2m_max[index]) || 'N/A'}°C
                    <br />
                    Low: {Math.floor(dailyForecast.temperature_2m_min[index]) || 'N/A'}°C
                    <br />
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {hourlyForecast && (
          <div className={styles.hourlyForecastContainer}>
            <h2>Hourly Forecast</h2>
            <ul>
              {hourlyForecast.time && hourlyForecast.time
                .slice(
                  hourlyForecast.time.findIndex(time => {
                    // Get the current hour
                    const currentHour = new Date().getHours();
                    // Find the index where the hour matches the current hour
                    return new Date(time).getHours() === currentHour;
                  }),
                  // Limit the slice to the next 24 hours
                  hourlyForecast.time.findIndex(time => {
                    const currentHour = new Date().getHours();
                    return new Date(time).getHours() === currentHour + 34;
                  }) + 34
                )
                .slice(0, 24)
                .map((time, index) => {
                  // Extract hour with AM/PM
                  const hour = new Date(time).toLocaleTimeString([], { hour: 'numeric', hour12: true });

                  return (
                    <li key={index} className={styles.forecast}>
                      <strong>{hour}</strong>
                      <br />
                      {weatherConditions[hourlyForecast.weathercode[index]]?.label || 'N/A'}
                      <br />
                      <i className={`wi ${weatherConditions[hourlyForecast.weathercode[index]]?.icon || ''}`}>
                      </i>
                      <br />
                      Temp: {Math.floor(hourlyForecast.temperature_2m[index]) || 'N/A'}°C
                    </li>
                  );
                })}
            </ul>
          </div>
        )}

      </div>
      <div>
        <Link to="/projects" className={styles.link}>Back to Projects</Link>
      </div>
    </div>
  );
};

export default Weather;
