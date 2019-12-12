import React from "react";
import { MainImg, AstroDiv, ButtonDiv, ActionDiv } from "./Styles.js";
import {
    CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const ApodCard = props => {
    
    return (
        <AstroDiv>
            <MainImg top width="100%" src={props.url} alt={'NASAs APOD'} key={props.service_version}/>
            <CardBody>
                <CardTitle style={{fontSize: "2rem"}}>{props.title}</CardTitle>
                <CardSubtitle>{props.date}</CardSubtitle>
                <CardText style={{fontSize: "1.5rem"}}>{props.explanation}</CardText>
                <ActionDiv>
                    <ButtonDiv>
                        <Button outline color="danger">Previous Day</Button>
                    </ButtonDiv>
                    <ButtonDiv>
                        <Button outline color="success">Following Day</Button>
                    </ButtonDiv>
                </ActionDiv>
            </CardBody>
        </AstroDiv>
    );
};

export default ApodCard;