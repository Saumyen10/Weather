import React, { useEffect, useState } from 'react';
import './App.css';

const api = {
  key: '630c2bc5984f46e05fefc95bf2812012',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [searchedLocation, setSearchedLocation] = useState('');

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setSearchedLocation(location);
    }
  };

  useEffect(() => {
    if (searchedLocation) {
      fetch(`${api.base}weather?q=${searchedLocation}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setLocation('');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchedLocation]);

  return (
    <div>
      <div className="search">
        <div className="city">
          <input
            placeholder="Search..."
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            onKeyDown={searchLocation}
            type="text"
          />
        </div>
      

      <div className="container">
        <div className="top">
          <div className="location">
            <p><b>{data.name} </b></p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()} m/s</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}

        </div>
      </div>
    </div>
  );
}

export default App;
