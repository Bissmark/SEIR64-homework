import GetQuote from "./components/GetQuote"
import GetWeather from "./components/GetWeather"

function App() {
  return (
    <div className="container" style={{backgroundImage: "url('https://picsum.photos/800/500?&blur=2')"}}>
      <div className="content">
        <GetQuote />
        <GetWeather />
      </div>
    </div>
  )
}

export default App
