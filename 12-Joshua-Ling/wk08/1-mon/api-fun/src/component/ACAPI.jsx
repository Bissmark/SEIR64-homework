import { useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import Gallery from "./Gallery";

function ACAPI() {
  const [villager, setVillagerValues] = useState({
    name: '',
    phrase: '',
    imageURL: ''
  });

  const [seaCreature, setCreatureValues] = useState({
    name: '',
    price: '',
    imageURL: ''
  });

  const fetchAnimals = (query) => {
    const URL = `https://acnhapi.com/v1/villagers/${query}`;

    axios(URL).then((result) => {
      const imageURL = result.data.image_uri;
      const name = result.data.name['name-USen'];
      const phrase = result.data.saying;
      setVillagerValues({name:name,phrase:phrase,imageURL:imageURL});
    });
  };

  const fetchSeaCreature = (query) => {
    const URL = `https://acnhapi.com/v1/sea/${query}`;

    axios(URL).then((result) => {
      const imageURL = result.data.image_uri;
      const name = result.data.name['name-USen'];
      const price = result.data.price;
      setCreatureValues({name:name,price:price,imageURL:imageURL});
    });
  };

  return (
    <div>
      <SearchForm label="Villager ID" onSubmit={fetchAnimals}/>
      <Gallery name={villager.name} phrase={villager.phrase} image={villager.imageURL}/>

      <SearchForm label="Sea Creature ID" onSubmit={fetchSeaCreature}/>
      <Gallery name={seaCreature.name} phrase={seaCreature.price} image={seaCreature.imageURL}/>
      </div>
  );
};

export default ACAPI;