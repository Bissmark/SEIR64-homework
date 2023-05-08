import { useState } from 'react';
import axios from 'axios';

const Burger = () => {
    const [burger, setBurger] = useState(0);
    const {name, price, season, episode, episodeUrl, url} = burger;

    const _fetchBurger = () => {
        // 333 because that's how many items (burgers) are in the api
        axios({url:`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${ Math.floor(Math.random() * 333) }`}).then((response) => {
            console.log(response);
            setBurger(response.data);
        })
    }
    
    return (
      <div>
            <button onClick={ _fetchBurger }>Show random Bob's Burger</button>
            <div>
                <ul>
                    <li>Name: { name }</li>
                    <li>Price: { price }</li>
                    <li>Season: { season }</li>
                    <li>Episode: { episode }</li>
                </ul>
            </div>
      </div>
    );
  }
  
  export default Burger
  