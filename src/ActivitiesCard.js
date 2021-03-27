import React from 'react'
import './ActivitiesCard.css'
import { Container,Row,Col} from 'react-bootstrap';
import python from 'programming-languages-logos/src/python/python.svg'
import {FcCalendar} from 'react-icons/fc'
import {VscOrganization} from 'react-icons/vsc'
import {HiOutlineInformationCircle} from 'react-icons/hi'

function ActivitiesCard({image,heading,subHeading,description,duration,members}) {
    return (
        <Container fluid className="activitiescard">
            {/* <Row className="justify-content-center"><img className="banner_image" src="https://i.ibb.co/4fVfvNW/sparks-Logo.png" alt="img_banner" width="100%"/></Row> */}
            <Row className="justify-content-center"><img className="circular" src={image} alt=""/></Row>
            <Row className="justify-content-center"><h3 className="mainHeading">{heading}</h3></Row>
            <Row className="justify-content-center"><h5 className="subHeading">{subHeading}</h5></Row>
            <Row className="justify-content-center"><p className="details">{description}</p></Row>
            <Row sm={2} className="justify-content-center">
                <Col className="duration"><FcCalendar size="15px"/> : {duration}</Col>
                <Col className="members"><VscOrganization size="15px" color="black" /> : {members}</Col>
            </Row>
            <button className="viewDetails"><HiOutlineInformationCircle size="18px" className="infoIcon"/> View more details</button>
        </Container>
    )
}

export default ActivitiesCard
