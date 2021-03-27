import React from 'react'
import './About.css'
import { Container,Row,Col} from 'react-bootstrap';

function About() {
    return (
        <Container fluid className="about">
            <div className="aboutUs">
                <Row className="aboutUs__heading justify-content-center"><h1>About the club</h1></Row>
                <Row className="aboutUs__content">
                    S.P.A.R.K.S. Init_iators is a coding club with a believe that “Do the best you can, until you know the better. When you know the better, do better” and so, our motto is “Don’t be the same, be better”. 
                    S.P.A.R.K.S. Init_iators is a club for everyone, regardless of their career stage or current level of knowledge. Coding Club is a place that brings people together, regardless of their gender or background. We all have the right to learn, and we believe learning is more fun and efficient when we help each other along the way.  
                    <br /><span>Founder: Jai Sanghi (B.Tech/CSE , 3rd Year)</span> 
                </Row>
            </div>
            <div className="vision">
                <Row className="justify-content-center vision__heading"><h1>Aim and Vision</h1></Row>
                <Row className="vision__content">  
                    <ul>
                        <li className="about__contentListitem">The Aim of forming this coding club in to establish a coding culture on our university campus by reaching every student passionate about coding whether of CSE Department or not and provide them with proper training and guidance.  </li>
                        <li className="about__contentListitem">To help members gain in-depth knowledge of coding. This will help them immensely during placements and can also bring laurels to the institution through various national and international programming contests  </li>
                        <li className="about__contentListitem">The club will help members develop an aptitude for logical thinking and visualizing a problem from various perspectives and creating multiple innovative solutions. The country as a whole requires a lot more coders for it to achieve the goal of a ‘Digital India’. The club is doing its bit to help the country pursue this goal </li>
                        <li className="about__contentListitem">Conduct more coding competitions to reach every student on campus </li>
                        <li className="about__contentListitem">Organize an event during the annual Techfest “VERGE”. </li>
                        <li className="about__contentListitem">Conduct workshops on areas of computer science like web development, application development, machine learning, IoT etc</li>
                        <li className="about__contentListitem">Contribute to open source projects, build websites and applications, provide technical support to organizations and various clubs in campus</li>
                        <li className="about__contentListitem">Create coding teams of our college to represent the college at different inter-collegiate events. </li>
                        <li className="about__contentListitem">Take part in competitions like ACM-ICPC, Google Code Jam, Google Summer of Code, and other online coding events </li>
                    </ul>
                    <span className="aim__span">The country as a whole requires a lot more coders for it to achieve the goal of a ‘Digital India’. The club is doing its bit to help the country pursue this goal </span>
                </Row>
            </div>
            <div className="activity">
                <Row className="activity__heading justify-content-center"><h1>Activities</h1></Row>
                <Row className="activity__content">  
                    <dl className="about__content_list">
                        <dt>Training</dt>
                        <dd>The club will conduct its trainings by dividing the members into 2 groups based on their knowledge and experience in programming
                            <ul>
                                <li>From-Scratch Learners</li>
                                <li>Competitive Coders</li>
                            </ul>
                        </dd>
                        <dt>Conducting sessions on weekends</dt>
                        <dd>The club will also conduct doubt-sessions, concept-learning sessions and project creation sessions on the weekends also so that the willing day-scholars as well as the hostel students will have an amazing option to carry forward their coding passion even on weekends instead of wasting it</dd>
                        <dt>Innovative projects</dt>
                        <dd>After the completion of every skill training. The club will motivate and help the students to work together and create an outstanding project on the skill learned. By working in teams the club members will also develop the skills like team working, leadership skills together with the coding skills.</dd>
                        <dt>Workshops and Seminars</dt>
                        <dd>Our team, together with the collaborations will conduct workshops on different areas of the computer science domain. We will be inviting known personalities and experienced people to come and conduct seminars aimed on guiding our members on how to pursue their dreams in different domain of this field. </dd>
                        <dt>Intra-University Hackathons</dt>
                        <dd>Once we have trained enough members in the club, then we will conduct intra-university hackathons that will again enhance their skills and understanding about hackathon level challenges. </dd>
                        <dt>Competing in inter-university coding events</dt>
                        <dd>We plan to send our club members to different college events for coding competitions and challenges so that we can know our level outside the university and the approaches used by others. Also, this will help us in creating good relations with other Universities</dd>
                    </dl>
                </Row>
            </div>  
            
        </Container>
    )
}

export default About
