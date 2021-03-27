import React from 'react'
import './AnnouncementCard.css'
import { Container,Row,Col} from 'react-bootstrap';
import {HiSpeakerphone} from 'react-icons/hi'

function AnnouncementCard({year,date,month,description}) {
    return (
        <Row className="announcementcard">
            <Col md={1} className="symbol"><HiSpeakerphone className="speakericon" size="60px"/></Col>
            <Col md={1} className="time">
                <Row className="time_year justify-content-center">{year}</Row>
                <Row className="time_date justify-content-center">{date}</Row>
                <Row className="time_month justify-content-center">{month}</Row>
            </Col>
            <Col className="announce justify-content-left">
                <Row><h3><b>{description}</b></h3> </Row>
            </Col>
        </Row>
    )
}

export default AnnouncementCard
