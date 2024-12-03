import React, { useRef } from "react";
import { GoSearch } from "react-icons/go";
import { BiCurrentLocation } from "react-icons/bi";
import "./Header.css";
export default function Header({ inputRef, fetchData, setLocation, setError }) {


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords
        setLocation({
          lon: longitude,
          lat: latitude
        })

        setError(null)
      },
      (err) => {
        setError("Not allowed to current location!")
      }
    )
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <h2 className="header__inner-logo">Weather</h2>
          <div className="header__inner-box">
            <input
              ref={inputRef}
              className="header__inner-box-input"
              type="search"
              placeholder="Enter city name"
            />
            <button onClick={() => fetchData()} className="header__inner-box-button-search">
              <GoSearch /> Search
            </button>
            <button onClick={getCurrentLocation} className="header__inner-box-button-location">
              <BiCurrentLocation /> Current Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
