import React from 'react'
import './PageFooter.css'
import { Container,Row,Col} from 'react-bootstrap';
import {IoMdCall} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function PageFooter() {
    return (
        <Container fluid className="pagefooter">
                <Col md={6} classname="leftside">
                    <h2 className="leftside_heading">Our Address</h2>
                    <p className="leftside_address">
                        39, Rajiv Gandhi Education City,<br/>Delhi-NCR, Sonepat, Haryana-131029 (India) <br/>Tollfree: 1800 180 1216 <br/>E-Mail: info@srmuniversity.ac.in<br/><span><IoMdCall className="callIcon"/> : +91 8885798671</span>
                    </p>
                    <br/>
                    <b className="leftside_address_b">© 2021 SRM University Delhi-NCR, Sonepat. All rights reserved <br/>Designed by Jai Sanghi</b>
                </Col>
                <Col md={6} className="rightside">
                    <h2 className="rightside_Heading">Get Social</h2>
                    <button className="github button"><a href="https://www.srmuniversity.ac.in/sparks-initiators/" target="_blank"><AiFillGithub color="white" size="40px" className="icon"/></a></button> 
                    <button className="insta button"><a href="https://www.instagram.com/srm_sparks/?hl=en" target="_blank"><AiFillInstagram color="white" size="40px" className="icon"/></a></button>
                    <hr />
                    <button className="facebook button"><a href="https://www.facebook.com/Srm_sparks-112251957164769/?modal=admin_todo_tour" target="_blank"><AiFillFacebook color="white" size="40px" className="icon"/></a></button>
                    <button className="linkedin button"><a href="http://linkedin.com/in/sparks-initiators-932a231aaS" target="_blank"><AiFillLinkedin color="white" size="40px" className="icon"/></a></button>
                </Col>
        </Container>
    )
}
export default PageFooter