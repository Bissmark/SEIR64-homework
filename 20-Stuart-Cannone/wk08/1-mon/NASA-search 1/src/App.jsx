import { useState } from 'react';
import { useEffect } from 'react';
import HttpClient from "./HttpClient"

const App = () => {
  const [apod, setApod] = useState({})
  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  const handleSearch = (event) => {
    event.preventDefault()
    const mediaType = 'image'
    console.log("query:", query)

    HttpClient.searchImages(query, mediaType).then(response => {
      setSearchResults(response.data.collection.items)
    }).catch(error => {
      console.log(error)
    })
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

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
  )
}

export default App;

