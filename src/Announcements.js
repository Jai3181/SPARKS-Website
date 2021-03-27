import React from 'react'
import "./Announcements.css"
import { Container,Row,Col} from 'react-bootstrap';
import AnnouncementCard from './AnnouncementCard'
import MemberCard from './MemberCard'

function Announcements() {
    return (
        <Container className="announcements">
            <Row class="announcement_heading"><h1>Announcements</h1></Row>
            <Row>
                <AnnouncementCard year="2020" date="1" month="May" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"/>
                <AnnouncementCard year="2020" date="1" month="May" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"/>
                <AnnouncementCard year="2020" date="1" month="May" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"/>
                <AnnouncementCard year="2020" date="1" month="May" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"/>
                <AnnouncementCard year="2020" date="1" month="May" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"/>
            </Row>
        </Container>
    )
}

export default Announcements
