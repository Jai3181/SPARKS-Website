import React from 'react'
import './Events.css'
import ActivityCardMain from './ActivityCardMain'
import { Container, Row, Col } from 'react-bootstrap';
import TrainingEvents from './TrainingEvents'
import {eventList} from './Eventlist'


function Activities() {
    const AllEventCards = eventList.map((item, key) => {
        return (
            <Col>
                <ActivityCardMain image={item.image} heading={item.heading} date={item.date} fee={item.fee} venue={item.venue} description={item.description} participants={item.participants} />
            </Col>
        )
    })

    const TrainingEventCards = eventList.map((item, key) => {
        if (item.type === "Training") {
            return (
                <Col>
                    <ActivityCardMain image={item.image} heading={item.heading} date={item.date} fee={item.fee} venue={item.venue} description={item.description} participants={item.participants} />
                </Col>
            )
        }
    })
    return (
            <div className="activities">
                <img className="events_banner" src="https://intuitivece.com/sites/intuitivece.com/files/styles/header_image/public/Hybrid%20Event%20Strategy%20Website%20Banner.jpg" alt="" />
                <Container fluid className="eventBox">
                    <Row md={3} className="justify-content-center">
                        {AllEventCards}
                    </Row>
                </Container>
            </div>
    )
}

export default Activities