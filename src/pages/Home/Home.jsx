import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import axios from "axios";
export default function Home() {




  const inputRef = useRef()
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [airQuality, setAirQuality] = useState(null)

  const [location, setLocation] = useState({ lon: null, lat: null })
  const [error, setError] = useState(null)

  error && alert(error);

 


  const API = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
  })
  const API_KEY = "e5e774629fcf72b428b60219302b9e65"
  useEffect(() => {
    API.get(`/weather?q=tashkent&appid=${API_KEY}&units=metric`)
      .then((res) => setCurrentWeather(res.data)
      )

    API.get(`/forecast?q=tashkent&appid=${API_KEY}&units=metric`)
      .then((res) => setForecast(res.data)
      )


  }, [])

  useEffect(() => {
    API.get(`/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`)
      .then((res) => setCurrentWeather(res.data)
      )

    API.get(`/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`)
      .then((res) => setForecast(res.data)
      )

    API.get(`/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`)
      .then((res) => setAirQuality(res.data)
      )
  }, [location])

  const fetchData = () => {
    API.get(`/weather?q=${inputRef.current.value}&appid=${API_KEY}&units=metric`)
      .then((res) => setCurrentWeather(res.data)
      )

    API.get(`/forecast?q=${inputRef.current.value}&appid=${API_KEY}&units=metric`)
      .then((res) => setForecast(res.data)
      )
  }

  useEffect(() => {
    API.get(`/air_pollution?lat=${currentWeather?.coord.lat}&lon=${currentWeather?.coord.lon}&appid=${API_KEY}`)
      .then((res) => setAirQuality(res.data)
      )
  }, [currentWeather])




  return (
    <div>
      <Header setLocation={setLocation} setError={setError} inputRef={inputRef} fetchData={fetchData} />
      <SideBar airQuality={airQuality} currentWeather={currentWeather} forecast={forecast} />
      <p>{error}</p>
    </div>
  );
}
