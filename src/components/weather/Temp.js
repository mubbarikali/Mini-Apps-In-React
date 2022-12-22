// https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=b533a9fc6972a79c09bac798dec2c1c4
import React, { useState, useEffect } from 'react'
import WeatherCard from "./WeatherCard";
import './style.css'

const Temp = () => {

    const [searchValue, setSearchValue] = useState("karachi");
    const [tempInfo, setTempInfo] = useState({});
    
    const getWeatherInfo = async()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=b533a9fc6972a79c09bac798dec2c1c4`
            let res = await fetch(url);
            let data = await res.json();

            const {temp, humidity, pressure} = data.main;
            const {main: weatherMood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset,
        }


        setTempInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])
    


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            className="searchTerm"
            placeholder="Search..."
            id="search"
            autoFocus
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
          className="searchButton"
          type="button"
          onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

  <WeatherCard {...tempInfo}/>

    </>
  );
}

export default Temp