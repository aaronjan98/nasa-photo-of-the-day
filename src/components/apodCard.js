import React from "react";
import { MainImg, AstroDiv } from "./Styles.js";
import {
    CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const ApodCard = props => {
    
    return (
        <AstroDiv>
            <MainImg top width="100%" src={props.url} alt={'NASAs APOD'} key={props.service_version}/>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.date}</CardSubtitle>
                <CardText>{props.explanation}</CardText>
                <Button>Previous Day</Button>
                <Button>Next Day</Button>
            </CardBody>
        </AstroDiv>
    );
};

export default ApodCard;