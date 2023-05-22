import { useState } from 'react'
import axios from 'axios';

const Holidays = () => {
    const [holidaysData, setHolidaysData] = useState(null);

    const fetchHolidays = (country) => {
        console.log(country);
        
        axios.get('https://api.getfestivo.com/v2/holidays', {
            params: {
                api_key: "e21d85f321af15811eecd2db970166e2",
                country: country,
                year: 2022
            }
        })
        .then((response) => {
            // handle success
            console.log(response.data)
            setHolidaysData(response.data);
        })
        .catch((error) => {
            // handle error
            console.log(error)
            setHolidaysData(null);
        });
    };

    return (
        <div>
            <h4>Public Holidays 2022 (by Country Code)</h4>
            <p>(Information for the current year is locked behind paid API subscription)</p>
            <SearchForm onSubmit={ fetchHolidays }/>
            <HolidaysInfo data={ holidaysData } />
        </div>
    );
};

const SearchForm = (props) => {
    const [query, setQuery] = useState('');

    const _handleInput = (event) => {
        setQuery(event.target.value);
    };

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(query);
    };

    return (
        <form onSubmit={ _handleSubmit }>
            <input type="search" onInput={ _handleInput } required placeholder="AUS / US"/>
            <input type="submit" value="Show holidays" />
        </form>
    );
};

const HolidaysInfo = (props) => {
    if (props && props.data === null) {
        return '';
    } else {
        const months = {
            "01": [],
            "02": [],
            "03": [],
            "04": [],
            "05": [],
            "06": [],
            "07": [],
            "08": [],
            "09": [],
            "10": [],
            "11": [],
            "12": []
        };

        // Assign each holiday to it's relevant months key
        props.data.holidays.forEach((holiday) => {

            // Split date into separate elements and grab the month element - format is YYYY-MM-DD
            const month = holiday.date.split('-')[1]

            // Append to relevant months key
            months[month].push(holiday);
        });

        // Make an array of list elements
        const monthsUnorderedLists = Object.entries(months).map(([monthName, holidays]) => {
            return (
                <div key={ monthName }>
                    <p>{ monthName }</p>
                    <ul>
                        { 
                            holidays.map((holiday, index) => {
                                return (
                                    <li key={ index }>
                                        { holiday.name } - { holiday.date };
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        });

        console.log(monthsUnorderedLists);

        return (
            <div>
                <p>All 2022 Holidays for { props.data.query.country.toUpperCase() }</p>
                <ul>
                    { monthsUnorderedLists };
                </ul>
            </div>
        )
    }
};

export default Holidays;