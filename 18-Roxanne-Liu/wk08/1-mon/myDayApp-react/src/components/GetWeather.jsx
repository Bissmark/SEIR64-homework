import { useEffect, useState } from "react";
import axios from 'axios';

function GetWeather() {
    const [temp, setTemp] = useState(null);  
    const [weather, setWeather] = useState(null);  

    const _fetchWeather = () => {
        axios('https://api.techniknews.net/ipgeo/').then((res) => {
            axios('https://api.open-meteo.com/v1/forecast?latitude=' + res.data.lat + '&longitude=' + res.data.lon + '&current_weather=true').then((res) => {
                let weatherCode = res.data.current_weather.weathercode;
                let weatherString = getWeatherString(weatherCode);
                setTemp(res.data.current_weather.temperature);
                setWeather(weatherString);
            });
        })
    }

    const getWeatherString = (code) => {
        let weatherValue = "";
    
        switch(code) {
            case 0:
                weatherValue = 'Clear sky';
                break;
            case 1:
                weatherValue = 'Mainly clear';
                break;
            case 2:
                weatherValue = 'Partly cloudy';
                break;
            case 3:
                weatherValue = 'Overcast';
                break;
            case 45:
                weatherValue = 'Fog';
                break;
            case 48:
                weatherValue = 'Depositing rime fog';
                break;
            case 51:
                weatherValue = 'Light Drizzle';
                break;
            case 53:
                weatherValue = 'Moderate Drizzle';
                break;
            case 55:
                weatherValue = 'Dense Drizzle';
                break;
            case 56:
                weatherValue = 'Light Freezing Drizzle';
                break;
            case 57:
                weatherValue = 'Dense Freezing Drizzle';
                break;
            case 61:
                weatherValue = 'Slight Rain';
                break;
            case 63:
                weatherValue = 'Moderate Rain';
                break;
            case 65:
                weatherValue = 'Heavy Rain';
                break;
            case 66:
                weatherValue = 'Light Freezing Rain';
                break;
            case 67:
                weatherValue = 'Heavy Freezing Rain';
                break;
            case 71:
                weatherValue = 'Slight Snow Fall';
                break;
            case 73:
                weatherValue = 'Moderate Snow Fall';
                break;
            case 75:
                weatherValue = 'Heavy Snow Fall';
                break;
        }
        
        return weatherValue;
    }

    useEffect(() => {
        _fetchWeather();
    }, []);

    return (
        <div>
            <p>
                Current temperature: { temp }°C
            </p>
            <p>
                Weather: { weather }
            </p>
        </div>
    )
}

export default GetWeather