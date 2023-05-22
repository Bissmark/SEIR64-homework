import { useState } from 'react'; // Importing useState from the React library
import axios from 'axios'; // Importing the Axios library

const Weather = () => { // Defining the weather component
    const [weatherData, setWeatherData] = useState(null); // Setting the weather data to null initially

    const fetchWeather = (city) => { // Fetches the data for a given city  
        console.log('Fetching', city);
        const weatherURL = 'http://api.openweathermap.org/data/2.5/weather'; // URL for the OpenWeatherMap API
        const weatherParams = {
          q: city,
          units: 'metric',
          appid: '87f3530b034ce83f07479771285f8bdf' // API key to access the API
        };
    
        axios.get(weatherURL, {params: weatherParams}).then((result) => {
          // On success simply save the data we got back
          // NB: axios provides your data in result.data, not just result.
          // console.log( result ); // is useful here.
          setWeatherData(result.data);
        }, () => {
          // On failure we remove any old data and return to the starting value.
          setWeatherData(null);
        });
    };
    
    return (
        <div>
            {/* Displaying a title */}
            <h1>Whether The Weather</h1> 
            {/* Passing the function as a prop */}
            <SearchForm onSubmit={ fetchWeather } /> 
            <WeatherInfo data={ weatherData } />
        </div>
    );
};

const SearchForm = (props) => { // Defining the SearchForm component 
    const [query, setQuery] = useState(''); // Setting query to empty string 

    const _handleInput = (e) => { // Handle input change 
        setQuery(e.target.value);
    };

    const _handleSubmit = (e) => { // Handle form submission 
        e.preventDefault();
        props.onSubmit(query); // Call the function with the query
    }

    return (
        <form onSubmit={ _handleSubmit }>
            {/* Displaying the search box */}
            <input type="search" onInput={ _handleInput } required placeholder="Glasgow" />
            {/* Displaying the submit button */}
            <input type="submit" value="Get weather" />
        </form>
    );
};

const WeatherInfo = (props) => { // Defining the WeatherInfo component 
    // Conditional rendering: we only show results once they're available.
    if (props && props.data === null) { // if the weather data is null, do not display.
        return '';
    } else {
        return (
            <div>
                {/* Displaying the city name  */}
                <h2>Weather for { props.data.name }</h2>
                {/* Displaying the current temperature */}
                <h3>Currently { props.data.main.temp }&deg;C</h3>
                {/* Image Source */}
                <img src={`http://openweathermap.org/img/w/${ props.data.weather[0].icon }.png` } alt={props.data.weather[0].description} />
                {/* Description */}
                <h4>{props.data.weather[0].main}: {props.data.weather[0].description}</h4>
            </div>
        );
    }
}

export default Weather;