import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    // Declare variable to hold the weather data
    const [weatherData, setWeatherData] = useState(null);

    // Function to fetch weather data for a given city
    const fetchWeather = (city) => {
        console.log('Fetching', city);

        const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
        const weatherParams = {
          q: city,
          units: 'metric',
          appid: '87f3530b034ce83f07479771285f8bdf'
        };

        axios.get(weatherURL, {params: weatherParams}).then((result) => {
          setWeatherData(result.data);
        }, () => {
          setWeatherData(null);
        });
    };
    
    // Render the weather data and the search form
    return (
        <div>
            <h1>Weather App</h1>
            <SearchForm onSubmit={ fetchWeather } />
            <WeatherInfo data={ weatherData } />
        </div>
    );
};

const SearchForm = (props) => {
    const [query, setQuery] = useState('');

    // Event handler to update the query state variable when the user types in the search box
    const _handleInput = (e) => {
        setQuery(e.target.value);
    };

    // Event handler to submit the search query to the parent component
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query);
    }

    // Render the search form
    return (
        <form onSubmit={ _handleSubmit }>
            <input type="search" onInput={ _handleInput } required placeholder="Glasgow" />
            <input type="submit" value="Get weather" />
        </form>
    );
};

// For rendering the weather data
const WeatherInfo = (props) => {
    // If no data is available, return an empty string
    if (props && props.data === null) {
        return '';
    } else {
        // Otherwise, render the weather data
        return (
            <div>
                <h2>Weather for { props.data.name }</h2>
                <h3>Currently { props.data.main.temp }&deg;C</h3>
                <img src={`http://openweathermap.org/img/w/${ props.data.weather[0].icon }.png` } alt={props.data.weather[0].description} />
                <h4>{props.data.weather[0].main}: {props.data.weather[0].description}</h4>
            </div>
        );
    }
}

export default Weather;
