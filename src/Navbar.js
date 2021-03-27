import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { Container,Row,Col} from 'react-bootstrap';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function Navbar() {
    return (
        <div className="navbar">
            <Container fluid>
                    <Col md={2}><Link to='/'><img id="navbar__logoimage" className="align-self-center" src='https://i.ibb.co/4fVfvNW/sparks-Logo.png'/></Link></Col>
                    <Col md={1}><Link to='/'><div className='navbar__option align-self-center'>Home</div></Link></Col>
                    <Col md={1}><Link to='/about'><div className='navbar__option align-self-center'>About Us</div></Link></Col>
                    <Col md={1}><Link to='/events'><div className='navbar__option align-self-center'>Events</div></Link></Col>
                    {/* <Col md={1}><Link to='/announcements'><div className='navbar__option align-self-center'>Announcements</div></Link></Col> */}
                    <Col md={1}><Link to='/coreteam'><div className='navbar__option align-self-center'>Core Team</div></Link></Col>
                    <Col></Col>
                    <Col md={1}>
                        <Row><a href="https://www.instagram.com/srm_sparks/?hl=en" target="_blank"><AiFillInstagram size="18px" className="icon"/></a><a href="https://www.srmuniversity.ac.in/sparks-initiators/" target="_blank"><AiFillGithub size="18px" className="icon"/></a></Row>
                        <Row><a href="https://www.facebook.com/Srm_sparks-112251957164769/?modal=admin_todo_tour" target="_blank"><AiFillFacebook size="18px" className="icon"/></a><a href="http://linkedin.com/in/sparks-initiators-932a231aa" target="_blank"><AiFillLinkedin size="18px" className="icon"/></a></Row>
                    </Col>
            </Container>
        </div>
    )
}

export default Navbar
