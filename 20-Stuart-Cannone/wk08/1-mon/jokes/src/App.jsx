import { useState } from 'react';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    axios
      .get('https://v2.jokeapi.dev/joke/Any?type=single')
      .then(response => {
        setJoke(response.data.joke);
      })
  };

  return (
    <div>
      <h1>Joke of the day</h1>
      <p>{joke}</p>
      <button onClick={getJoke}>Get Joke</button>
    </div>
  );
}

export default App;
