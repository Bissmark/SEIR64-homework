import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="app-container">
      <Card
        img="https://images.dog.ceo/breeds/spaniel-sussex/n02102480_308.jpg"
        name="Mr Wilson"
        rating="7.7"
        country="Zootopia"
      />
      <Card 
        img="https://images.dog.ceo/breeds/pointer-germanlonghair/hans3.jpg" 
        name="Zabalata"
        rating="8.3"
        country="Narnia"
        />
      <Card 
        img="https://images.dog.ceo/breeds/mastiff-english/1.jpg" 
        name="Mr Peebody"
        rating="6.3"
        country="Far Far away"
      />
    </div>
  );
}

export default App;
