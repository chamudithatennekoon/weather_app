import { useState, useEffect } from 'react';

function App() {
  

  const [weatherData, setWeather] = useState([]);
  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=cf36599446cb449cb2925918242502&q=Kandy')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  }, []);

  

  return (
    <div>
      <h1>Weather App</h1>

      <b>City : </b> <span>{weatherData?.location?.name}</span>
      <br />
      <b>Province : </b> <span>{weatherData?.location?.region}</span>
      <br />
      <b>Country : </b> <span>{weatherData?.location?.country}</span>
      <br />
      <b>IMG : </b> <span>{weatherData?.current?.condition?.text} <img src={weatherData?.current?.condition?.icon} alt="" /></span>
      
      



    </div>
  )
}

export default App
