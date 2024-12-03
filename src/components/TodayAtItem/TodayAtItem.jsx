import React from "react";
import "./TodatAtItem.css"
const TodayAtItem = ({ currentTime, currentTemp, currentIcon }) => {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let currentDate = new Date(currentTime * 1000).getDate()
    let currentMonth = months[new Date(currentTime * 1000).getMonth()].slice(0, 3)

    let currentHour = new Date(currentTime * 1000).getHours()
    let currentHourReal = currentHour > 12 ? currentHour - 12 + " PM" : currentHour + " AM"

    return <li className="sidebar__inner-right-top-weather-item">
        <span className="sidebar__inner-right-top-weather-item-date">{currentDate} {currentMonth}</span>
        <h3 className="sidebar__inner-right-top-weather-item-head">
            {currentHourReal}
        </h3>
        <img
            src={`https://openweathermap.org/img/wn/${currentIcon}@2x.png`}
            className="sidebar__inner-right-top-weather-item-img"
        />
        <h3 className="sidebar__inner-right-top-weather-item-title">
            {currentTemp}°C
        </h3>
    </li>;
};

export default TodayAtItem;
