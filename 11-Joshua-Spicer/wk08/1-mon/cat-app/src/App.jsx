import { useState } from 'react';
import { getRandomCatImage } from './CatAPI';

function App() {
  const [catImageUrl, setCatImageUrl] = useState('');

  const handleButtonClick = async () => {
    const imageUrl = await getRandomCatImage();
    setCatImageUrl(imageUrl);
  };

  return (
    <div>
      <h1>Random Cool Cats</h1>
      <button onClick={handleButtonClick}>Get Random Cat Image</button>
      {catImageUrl && <img src={catImageUrl} alt="Random Cat" />}
    </div>
  );
}

export default App;
