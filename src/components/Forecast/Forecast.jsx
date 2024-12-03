import React from "react";
import "./Forecast.css"
import ForecastItem from "../ForecastItem/ForecastItem";
function Forecast({ forecast }) {
    return <div className="sidebar-bottom__inner">
        <h2 className="sidebar-bottom__inner-heading">
            5 days Forecast
        </h2>
        <ul className="sidebar-bottom__inner-list">
            <ForecastItem data={forecast?.list[7]} />
            <ForecastItem data={forecast?.list[15]} />
            <ForecastItem data={forecast?.list[23]} />
            <ForecastItem data={forecast?.list[31]} />
            <ForecastItem data={forecast?.list[39]} />
        </ul>
    </div>;
}

export default Forecast;
