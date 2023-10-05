
import './App.css';
import {useEffect, useState} from 'react';


function App() {
const [temperature,setTemperature] = useState('')
const [city,setCity] =useState('kochi')


useEffect(() => {
  let latitude;
  let longitude;

  if (city === "kochi") {
    latitude = 9.931233;
    longitude = 76.267303;
  } else if (city === "kozhikode") {
    latitude = 11.24802;
    longitude = 75.7804;
  } else {
    latitude = 11.874477;
    longitude = 75.370369;
  }

  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=" +
    latitude +
    "&longitude=" +
    longitude +
    "&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

  fetch(url)
    .then((res) => res.json())
    .then((data) => setTemperature(data.current_weather.temperature))
    .catch((err) => console.log(err));
}, [city]);

  

  return (
    <>
    <header></header>
    <main>
    <h1>Temperature at {city} is <span className='temp'>{temperature}&deg;C</span></h1>
   <button onClick={()=>{setCity("kochi")}}>kochi</button>
   <button onClick={()=>{setCity("kozhikode")}}>kozhikode</button>
   <button onClick={()=>{setCity("kannur")}}>kannur</button>
    </main>
    <footer></footer>
    </>
    
  );
}

export default App;
