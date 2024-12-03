import React from "react";
import { FaWind } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { MdOutlineWaterDrop } from "react-icons/md";
import "./MainRight.css";
import AirQualityItem from "../AirQualityItem/AirQualityItem";
import TodayAtItem from "../TodayAtItem/TodayAtItem";

function MainRight({ airQuality, currentWeather, forecast }) {

    let todayAt = forecast?.list.slice(0, 8);

    let sunsetHour = new Date(currentWeather?.sys.sunset * 1000).getHours();
    let sunsetHourReal = sunsetHour > 12 ? sunsetHour - 12 : sunsetHour
    let sunsetMinutes = new Date(currentWeather?.sys.sunset * 1000).getMinutes()
    let isAMorPM = sunsetHour > 12 ? "PM" : "AM"

    let sunriseTime = `${new Date(currentWeather?.sys.sunrise * 1000).getHours()} : ${new Date(currentWeather?.sys.sunrise * 1000).getMinutes()} AM`
    let sunsetTime = `${sunsetHourReal} : ${sunsetMinutes} ${isAMorPM}`



    let airQualityName = ["Good", "Fair", "Moderate", "Poor", "Very Poor"]
    let airStatus = airQualityName[airQuality?.list[0].main.aqi - 1]
    return <div className="sidebar__inner-right">
        <div className="sidebar__inner-right-top">
            <h2 className="sidebar__inner-right-top-heading">
                Today's Highlights
            </h2>
            <div className="sidebar__inner-right-top-inner">
                <div className="sidebar__inner-right-top-quality">
                    <div className="sidebar__inner-right-top-index">
                        <h3 className="sidebar__inner-right-top-index-text">
                            Air Quality Index
                        </h3>
                        <button className={`sidebar__inner-right-top-index-btn ${airStatus?.toLowerCase().slice(0, 4)}`}>
                            {airStatus}
                        </button>
                    </div>
                    <div className="sidebar__inner-right-top-air">
                        <ul className="sidebar__inner-right-top-air-list">
                            <li className="sidebar__inner-right-top-air-item">
                                <FaWind className="sidebar__inner-right-top-air-img" />
                            </li>
                            <AirQualityItem airType={"CO"} airData={airQuality?.list[0].components.co} />
                            <AirQualityItem airType={"NH3"} airData={airQuality?.list[0].components.nh3} />
                            <AirQualityItem airType={"NO"} airData={airQuality?.list[0].components.no} />
                            <AirQualityItem airType={"NO2"} airData={airQuality?.list[0].components.no2} />
                            <AirQualityItem airType={"O3"} airData={airQuality?.list[0].components.o3} />
                            <AirQualityItem airType={"PM2.5"} airData={airQuality?.list[0].components.pm2_5} />
                            <AirQualityItem airType={"PM10"} airData={airQuality?.list[0].components.pm10} />
                            <AirQualityItem airType={"SO2"} airData={airQuality?.list[0].components.so2} />

                        </ul>
                    </div>
                </div>
                <div className="sidebar__inner-right-top-sun">
                    <h2 className="sidebar__inner-right-top-sun-heading">
                        Sunrise & Sunset
                    </h2>
                    <ul className="sidebar__inner-right-top-sun-list">
                        <li className="sidebar__inner-right-top-sun-item">
                            <FiSunrise className="sidebar__inner-right-top-sun-item-img" />
                            <div className="sidebar__inner-right-top-sun-item-box">
                                <p className="sidebar__inner-right-top-sun-item-sun-box-text">
                                    Sunrise
                                </p>
                                <h3 className="sidebar__inner-right-top-sun-item-sun-box-heading">
                                    {sunriseTime}
                                </h3>
                            </div>
                        </li>
                        <li className="sidebar__inner-right-top-sun-item">
                            <FiSunset className="sidebar__inner-right-top-sun-item-img" />
                            <div className="sidebar__inner-right-top-sun-item-box">
                                <p className="sidebar__inner-right-top-sun-item-sun-box-text">
                                    Sunset
                                </p>
                                <h3 className="sidebar__inner-right-top-sun-item-sun-box-heading">
                                    {sunsetTime}
                                </h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="sidebar__inner-right-top-main">
                <ul className="sidebar__inner-right-top-main-list">
                    <li className="sidebar__inner-right-top-main-item">
                        <h3 className="sidebar__inner-right-top-main-item-heading">
                            Hummidity
                        </h3>
                        <div className="sidebar__inner-right-top-main-item-box">
                            <MdOutlineWaterDrop className="sidebar__inner-right-top-main-item-box-img" />
                            <h2 className="sidebar__inner-right-top-main-item-box-title">
                                {currentWeather?.main.humidity}%
                            </h2>
                        </div>
                    </li>
                    <li className="sidebar__inner-right-top-main-item">
                        <h3 className="sidebar__inner-right-top-main-item-heading">
                            Hummidity
                        </h3>
                        <div className="sidebar__inner-right-top-main-item-box">
                            <MdOutlineWaterDrop className="sidebar__inner-right-top-main-item-box-img" />
                            <h2 className="sidebar__inner-right-top-main-item-box-title">
                                70%
                            </h2>
                        </div>
                    </li>
                    <li className="sidebar__inner-right-top-main-item">
                        <h3 className="sidebar__inner-right-top-main-item-heading">
                            Hummidity
                        </h3>
                        <div className="sidebar__inner-right-top-main-item-box">
                            <MdOutlineWaterDrop className="sidebar__inner-right-top-main-item-box-img" />
                            <h2 className="sidebar__inner-right-top-main-item-box-title">
                                70%
                            </h2>
                        </div>
                    </li>
                    <li className="sidebar__inner-right-top-main-item">
                        <h3 className="sidebar__inner-right-top-main-item-heading">
                            Hummidity
                        </h3>
                        <div className="sidebar__inner-right-top-main-item-box">
                            <MdOutlineWaterDrop className="sidebar__inner-right-top-main-item-box-img" />
                            <h2 className="sidebar__inner-right-top-main-item-box-title">
                                70%
                            </h2>
                        </div>
                    </li>
                    <li className="sidebar__inner-right-top-main-item">
                        <h3 className="sidebar__inner-right-top-main-item-heading">
                            Hummidity
                        </h3>
                        <div className="sidebar__inner-right-top-main-item-box">
                            <MdOutlineWaterDrop className="sidebar__inner-right-top-main-item-box-img" />
                            <h2 className="sidebar__inner-right-top-main-item-box-title">
                                70%
                            </h2>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="sidebar__inner-right-top-weather">
                <h2 className="sidebar__inner-right-top-weather-heading">
                    Today at
                </h2>
                <ul className="sidebar__inner-right-top-weather-list">
                    {
                        todayAt?.map((el) => <TodayAtItem currentTime={el.dt} currentIcon={el.weather[0].icon} currentTemp={el.main.temp} />)
                    }
                </ul>
            </div>
        </div>
    </div>;
}

export default MainRight;
