import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import img from '../img/resume-builder.png';
import img1 from '../img/pick.jpg';
import img2 from '../img/content.jpg';
import img3 from '../img/download.jpg';
import '../css/all.min.css';
import {
    Link
} from "react-router-dom";
import Tamplets from './Templates';

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="maxker">maxker Online Resume Maker.<br /> Create a Professional resume for free.</h1>
                        <p className="fs-3">Free to use. Developed by hiring professionals.</p>
                        <p className="fs-5 mb-5">Resume writing can be stressful, confusing, and time-consuming if you do it all on your own. With our Resume Maker, it’s quick, pain-free, and effective.</p>
                        <Link className="button m-auto" to="/personal">Create Your Resume Now</Link>
                    </Col>
                    <Col>
                        <img src={img} alt="resum" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <h2 className='text-center m-5 fs-2'>Just three simple steps to download your resume:</h2>
                <Row className='text-center mb-5'>
                    <Col>
                        <img src={img1} alt="pick" width={200} height={300} />
                        <div className='mt-5'><i class="fa-solid fa-1"></i></div>
                        <p className='mt-2'>Choose from our extensive template<br /> collection and personalize to your style.</p>
                    </Col>
                    <Col>
                        <img src={img2} alt="content" width={250} height={300} />
                        <div className='mt-5'><i class="fa-solid fa-2"></i></div>
                        <p className='mt-2'>Click to add job-specific content,<br />pre-written by experts.</p>
                    </Col>
                    <Col>
                        <img src={img3} alt="download" width={250} height={300} />
                        <div className='mt-5'><i class="fa-solid fa-3"></i></div>
                        <p className='mt-2'>Download in the file<br />format you need and send!</p>
                    </Col>
                </Row>
            </Container>
            <Tamplets/>
        </>
    )
}

export default Home
