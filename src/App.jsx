import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  
  const [location, setLocation] = useState('kandy');
  const [weatherData, setWeather] = useState([]);

  const getWeather = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=cf36599446cb449cb2925918242502&q=${location}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
    setWeather(json)
    }
    )
  }

  useEffect(() => {
    getWeather();
  }, [location, getWeather]);


  return (
    <div className='container'>
      <div className="title">
      <h1>Weather App</h1>
      </div>

      <div className="search">
        <input onChange={ (e) => setLocation(e.target.value)} />
        <button onClick={getWeather}>Search</button>
      </div>

      <h2>
        {weatherData?.location?.name}
        </h2>
      <h4>
          {weatherData?.location?.region} / {weatherData?.location?.country} 
      </h4>
      {weatherData?.location?.localtime}
      <br />
      <img src={weatherData?.current?.condition?.icon} alt="" height="150px" />
      <br />
      <h2>
       {weatherData?.current?.temp_c}°C / {weatherData?.current?.temp_f}°F
       </h2>
      <h4>
      {weatherData?.current?.condition?.text}
      </h4>
      
    </div>
  )
}

export default App
