import { useState, useEffect } from 'react';
import HttpClient from "./HttpClient";

const ImageSearch = () => {
  const [apod, setApod] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data);
    });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const mediaType = 'image';
    console.log("query:", query);

    HttpClient.searchImages(query, mediaType)
      .then(response => {
        setSearchResults(response.data.collection.items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h2>Search NASA Images</h2>
      <form onSubmit={handleSearch}>
        <label>
          Query:
          <input type="text" name="query" value={query} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          {searchResults.map(result => (
            <div key={result.data[0].nasa_id}>
              <h3>{result.data[0].title}</h3>
              <img src={result.links[0].href} alt={result.data[0].title} width="300" />
              <p>{result.data[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSearch;
