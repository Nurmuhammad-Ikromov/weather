import React from "react";

const AirQualityItem = ({ airData, airType }) => {
    return <li className="sidebar__inner-right-top-air-item">
        <p className="sidebar__inner-right-top-air-item-text">
            {airType}
        </p>
        <h3 className="sidebar__inner-right-top-air-item-heading">
            {airData}
        </h3>
    </li>;
};

export default AirQualityItem;
