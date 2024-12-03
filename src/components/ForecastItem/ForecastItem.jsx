import React from "react";

const ForecastItem = ({ data }) => {
 

    let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const forecastItemData = {
        day: (new Date(data?.dt * 1000)).getDay() - 1 != "-1" ? weekDays[(new Date(data?.dt * 1000)).getDay() - 1] : "Sunday",
        date: new Date(data?.dt * 1000).getDate(),
        month: months[(new Date(data?.dt * 1000)).getMonth()],
        deg: data?.main.temp
    }


    return <li className="sidebar-bottom__inner-item">
        <img
            className="sidebar-bottom__inner-item-img"
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        />
        <h3 className="sidebar-bottom__inner-item-heading">
            {forecastItemData.deg}&deg;C
        </h3>
        <p className="sidebar-bottom__inner-item-text">{forecastItemData.date} {forecastItemData.month?.slice(0, 3)}</p>
        <p className="sidebar-bottom__inner-item-text">{forecastItemData.day?.slice(0,3)}</p>
    </li>;
};

export default ForecastItem;
