/*import React, {useEffect, useState} from 'react';
import './Search.css'


/* 
const Search = ({ onSearchChange }) => {
  
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${geo_api_url}/minPopulation=1000000&namePrefix=${inputValue}`,
      geoOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
    
  }


  return (
   
      <AsyncPaginate 
        placeholder="Search for city"
        debounceTimeout = {600}
        value = {search}
        onChange = {handleOnChange}  
        loadOptions={loadOptions}
      />
    

    
    
  )
}



const Search = () => {

const [city,setCity] = useState(null);
const [search, setSearch] = useState("Mumbai");

    useEffect ( () => {
      const fetchapi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=630c2bc5984f46e05fefc95bf2812012`;
      
        const response = await fetch(url);
        const result = await response.json();

        setCity(result.main);
        
      };

      fetchapi();

    }, [search] )

      return (
        <div>
        <div className="back">
              <div className="box">
                <div className="data">
                    <input type="search"
                     value = {search}
                    className='input_city'
                    onChange={ (event) => { setSearch(event.target.value) }}
                    />
                </div>
              </div>

          {!city ?  (
              <p className="error"> No Data Found!</p>
          ) : (
            <div>
              <div className="info">
                  <h3 className="location">
                    <i class = "fas fa-street-view"> </i> {city}
                  </h3>
              </div>
              
              <h1 className='temp'> {city.temp} *Cel</h1>
              <h3 className='tempmin_max'> Min: {city.temp_min} | Max: {city.temp_max0} *Cel </h3>
            </div>
          )}

          </div>
        </div>
      )
          }


export default Search;  */