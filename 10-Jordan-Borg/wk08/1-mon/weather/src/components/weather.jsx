import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = (city) => {
        console.log('Fetching', city);
        const weatherURL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';
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
    
    return (
        <div>
            <h1>Rando weather</h1>
            <SearchForm onSubmit={ fetchWeather } />
            <WeatherInfo data={ weatherData } />
        </div>
    );
};

const SearchForm = (props) => {
    const [query, setQuery] = useState('');

    const _handleInput = (e) => {
        setQuery(e.target.value);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query);
    }

    return (
        <form onSubmit={ _handleSubmit }>
            <input type="search" onInput={ _handleInput } required placeholder="Malta" />
            <input type="submit" value="click me pls" />
        </form>
    );
};

const WeatherInfo = (props) => {
    if (props && props.data === null) {
        return '';
    } else {
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