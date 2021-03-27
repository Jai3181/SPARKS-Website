import React from 'react'
import './Homepage.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from 'react-player'
import ActivitiesCard from './ActivitiesCard'
import python from 'programming-languages-logos/src/python/python.svg'
import java from 'programming-languages-logos/src/java/java.svg'
import javascript from 'programming-languages-logos/src/javascript/javascript.svg'
import c from 'programming-languages-logos/src/c/c.svg'
import { Container,Row,Col} from 'react-bootstrap';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';

function Homepage() {
    return (
        <Container fluid className="homepage"> 
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval='60000' swipeable={true}>
                        <div><img src="images/collabVerge.jpg" alt="carousel_img1"/>{/* <p className="legend">Legend 2</p> */}</div>
                        <div><img src="images/poster1.jpg" alt="carousel_img2"/>{/* <p className="legend">Legend 2</p> */}</div>
                        <div><img src="images/webinar8.jpg" alt="carousel_img3"/>{/* <p className="legend">Legend 3</p> */}</div>
                </Carousel>
                <Container fluid className="homepage__aboutUs">
                    <Row className="homepage__aboutUs_heading justify-content-center"><h1>About Us</h1></Row>
                    <Row>
                        {/* <Col lg={3}><ReactPlayer className="about_video" height="auto"  width='100%'    controls    url='videos/video1.mp4' playing='true'  loop={true} volume='0'  /></Col> */}
                        <Col><p className="homepage__aboutUs_para">The word “S.P.A.R.K.S.” stands for “Special programmers are requires to know sparks” S.P.A.R.K.S. Initiators is a coding club with a believe that “Do the best you can, until you know the better. When you know the better, do better” and so, our motto is “Don’t be the same, be better”. S.P.A.R.K.S. Initiators is a club for everyone, regardless of their career stage or current level of knowledge. Coding Club is a place that brings people together, regardless of their gender or background. We all have the right to learn, and we believe learning is more fun and efficient when we help each other along the way.</p></Col>
                    </Row>
                </Container>
                <Container fluid className="homepage__trainings">
                    <Row className="homepage__trainings_heading justify-content-center"><h1>Trainings Conducted By Us</h1></Row>
                    <Row><p className="homepage__trainings_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus illum nulla, perferendis fugiat esse officiis saepe? Perspiciatis itaque impedit sint corporis pariatur. Eligendi est esse quam consequatur atque facilis?</p></Row>
                    <Row>
                        <Col><ActivitiesCard image={python}  heading="PYTHON"    subHeading='From-Scratch Learner'   description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit maxime accusantium sequi, perferendis tempore quis tempora aut eveniet eum, error quisquam ut rerum nisi dolorem vel, iusto culpa amet natus.'   duration='20 days'  members='30 learners'   className="card"/></Col>
                        <Col><ActivitiesCard image={java}    heading="JAVA"  subHeading='From-Scratch Learner'   description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit maxime accusantium sequi, perferendis tempore quis tempora aut eveniet eum, error quisquam ut rerum nisi dolorem vel, iusto culpa amet natus.'   duration='20 days'  members='30 learners'   className="card"/></Col>
                        <Col><ActivitiesCard image={javascript}  heading="JAVASCRIPT"    subHeading='From-Scratch Learner'   description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit maxime accusantium sequi, perferendis tempore quis tempora aut eveniet eum, error quisquam ut rerum nisi dolorem vel, iusto culpa amet natus.'   duration='20 days'  members='30 learners'   className="card"/></Col>
                        <Col><ActivitiesCard image={c}   heading="C Language"    subHeading='From-Scratch Learner'   description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit maxime accusantium sequi, perferendis tempore quis tempora aut eveniet eum, error quisquam ut rerum nisi dolorem vel, iusto culpa amet natus.'   duration='20 days'  members='30 learners'   className="card"/></Col>
                    </Row>
                </Container>
                <Container fluid className="homepage__feedback">
                    <Row className="homepage__feedback_heading justify-content-center"><h1>Feedback of Trainings</h1></Row>
                    <Row><p className="homepage__feedback_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus illum nulla, perferendis fugiat esse officiis saepe? Perspiciatis itaque impedit sint corporis pariatur. Eligendi est esse quam consequatur atque facilis?</p></Row>
                    <Row>
                        {/* <Col sm={12} md={6}><ReactPlayer className="video" height="auto"  width='100%'    controls    url='videos/video2.mp4' playing='false'  loop={true} volume='0'  /></Col> */}
                        {/* <Col sm={12} md={6}><ReactPlayer className="video" height="auto"  width='100%'    controls    url='videos/video3.mp4' playing='true'  loop={true} volume='0'  /></Col> */}
                    </Row>
                </Container>
        </Container>
    )
}

export default Homepage