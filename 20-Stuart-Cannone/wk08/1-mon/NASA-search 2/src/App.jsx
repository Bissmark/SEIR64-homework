import { useState } from 'react';
import { useEffect } from 'react';

import PicOfTheDay from './components/PicOfTheDay';
import ImageSearch from './components/ImageSearch';
const App = () => {

  return (
    <div>
      < PicOfTheDay />
      <ImageSearch />


    </div>
  )
}

export default App;
