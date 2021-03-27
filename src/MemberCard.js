import React from 'react'
import './MemberCard.css'
import { Container,Row,Col} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
function MemberCard({image, position,name,designation,instagram,facebook,linkedin,gmail}) {
    return (
        <Container className="membercard">
            <Row className="justify-content-center">
                <img className="circular member_image" src={image} alt="member_image"/>
            </Row>
            <Row className="member_position justify-content-center"><h4>{position}</h4></Row>
            <Row className="member_name justify-content-center"><h2>{name}</h2></Row>
            <Row className="member_position_university justify-content-center"><h4>{designation}</h4></Row>
            <Row className="justify-content-center" sm={2} md={4}>
                <Col md={2}><button className="member_social"><SocialIcon url={facebook} target="_blank" /></button></Col>
                <Col md={2}><button className="member_social"><SocialIcon url={instagram} target="_blank" /></button></Col>
                <Col md={2}><button className="member_social"><SocialIcon url={linkedin} target="_blank" /></button></Col>
                <Col md={2}><button className="member_social"><SocialIcon url={gmail} target="_blank" /></button></Col>
                {/* "mailto:jaykumar9246@gmail.com" */}
            </Row>
        </Container>
    )
}

export default MemberCard
