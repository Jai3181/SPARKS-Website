import React from 'react'
import './ActivityCardMain.css'
import { Container,Row,Col} from 'react-bootstrap';
import {IoPersonCircle,IoPeople} from 'react-icons/io5'

function ActivityCardMain({image,heading,date,fee,venue,description,participants}) {
    return (
        <Container className="activityCardMain">
            <Row><img className="banner_image img-fluid" src="https://i.ibb.co/4fVfvNW/sparks-Logo.png" alt="Banner_Img"/></Row>
            <Row  className="card_topic justify-content-center"><h3>{heading}</h3></Row>
            <hr/>
            <Row>
                <Col md={4} className="card_detail"><span className="text-muted">Starts On:</span><br/>{date}</Col>
                <Col md={4} className="card_detail"><span className="text-muted">Entry FEE:</span><br/>{fee}</Col>
                <Col md={4} className="card_detail"><span className="text-muted">Venue:</span><br/>{venue}</Col>
            </Row>
            <hr/>
            <Row md={4} className="card_description">
                <b>Description:</b> {description}
            </Row>
            <hr/>
            <Row className="card_bottom">
                <Col className="card_participants"><IoPeople size="22px"></IoPeople>No Of Participants: {participants}</Col>
                <Col md={4}className="card_button"><button type="button" class="btn btn-primary">Register</button></Col>
            </Row>
        </Container>
    )
}

export default ActivityCardMain
