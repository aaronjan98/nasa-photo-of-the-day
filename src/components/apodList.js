import React, { useState, useEffect} from "react";
import axios from "axios";
import ApodCard from "./ApodCard";

function ApodList (){
    const [picInfo, setPicInfo] = useState([]);

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=HbCO8oci96rbJdYtTshGX9NhBd2lg6m8wonVriEn#`)
          .then(response => {
            console.log(response.data);
            setPicInfo(response.data);
          })
          .catch(error => {
            console.log("the data was not returned", error);
          });
      }, []);


      return (
        <div className="pic-container">
              <ApodCard
                key={picInfo.service_version}
                url={picInfo.url}
                title={picInfo.title}
                date={picInfo.date}
                explanation={picInfo.explanation}
              />
        </div>
      );
}

export default ApodList;