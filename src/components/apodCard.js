import React from "react";

const ApodCard = props => {
    
    return (
        <div className="astronomyInfo" key={props.service_version}>
            <img src={props.url} alt={'NASAs APOD'}/>
            <h2>{props.title}</h2>
            <h4>{props.date}</h4>
            <p>{props.explanation}</p>
        </div>
    );
};

export default ApodCard;