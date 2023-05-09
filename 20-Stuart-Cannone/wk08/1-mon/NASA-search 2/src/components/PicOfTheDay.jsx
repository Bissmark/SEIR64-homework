import { useState, useEffect } from 'react';
import HttpClient from "./HttpClient";

const PicOfTheDay = () => {
  const [apod, setApod] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await HttpClient.get("/planetary/apod");
      setApod(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>NASA API</h1>
      <h2>Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" width="800" height="auto" />
          <p>{apod.explanation}</p>
        </article>
      )}
    </div>
  );
};

export default PicOfTheDay;
