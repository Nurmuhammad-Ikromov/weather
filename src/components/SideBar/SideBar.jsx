import React from "react";
import "./SideBar.css";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { FaWind } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import Forecast from "../Forecast/Forecast";
import MainRight from "../MainRight/MainRight";
export default function SideBar({ currentWeather, forecast, airQuality }) {



  let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  const currentDate = {
    day: weekDays[(new Date(currentWeather?.dt * 1000)).getDay() - 1],
    date: new Date(currentWeather?.dt * 1000).getDate(),
    month: months[(new Date(currentWeather?.dt * 1000)).getMonth()],
    year: new Date(currentWeather?.dt * 1000).getFullYear()
  }

  return (
    <>
      <div className="sidebar">
        <div className="container">
          <div className="sidebar__inner">
            <div className="sidebar__inner-left">
              <div className="sidebar-top__inner">
                <h3 className="sidebar-top__inner-heading">Now</h3>
                <div className="sidebar-top__inner-content">
                  <h2 className="sidebar-top__inner-content-title">{currentWeather?.main.temp}&deg;C</h2>
                  <img
                    className="sidebar-top__inner-content-img"
                    src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
                  />
                </div>
                <div className="sidebar-top__inner-main">
                  <p className="sidebar-top__inner-main-text">{currentWeather?.weather[0].description}</p>
                </div>
                <div className="sidebar-top__inner-location">
                  <ul className="sidebar-top__inner-location-list">
                    <li className="sidebar-top__inner-item">
                      <IoCalendarClearOutline className="sidebar-top__inner-item-img" />
                      <p className="sidebar-top__inner-item-text">
                        {currentDate.day}, {currentDate.date},{currentDate.month?.slice(0, 3)} {currentDate.year}
                      </p>
                    </li>
                    <li className="sidebar-top__inner-item">
                      <CiLocationOn className="sidebar-top__inner-item-img" />{" "}
                      <p className="sidebar-top__inner-item-text">
                        {currentWeather?.name}, {currentWeather?.sys.country}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* forecast  */}
              <Forecast forecast={forecast} />
            </div>


            {/* right  */}
            <MainRight forecast={forecast} currentWeather={currentWeather} airQuality={airQuality} />
          </div>
        </div>
      </div>
    </>
  );
}
