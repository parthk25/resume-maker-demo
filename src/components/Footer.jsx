import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {
  Link
} from "react-router-dom";
import { Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <Container>
          <Row>
            <Col>
              <ul>
                <p className='fs-5'>Customer Support</p>
                <Link to=""><i class="fa-solid fa-phone"></i>+91 95628 43242</Link>
                <br />
                Schedule:
                <br />
                Mon-Fri 8 AM - 8 PM
                <br />
                Saturday 8 AM - 5PM
                <br />
                Sunday 10 AM - 6 PM
              </ul>
            </Col>
            <Col>
              <ul>
                <p className='fs-5'>About</p>
                <li><Link to="">terms and conditions</Link></li>
                <li><Link to="">Privcy Policy</Link></li>
                <li><Link to="">About Us</Link></li>
                <li><Link to="">Affiliates</Link></li>
                <li><Link to="">FAQs</Link></li>
              </ul>
            </Col>
            <Col>
              <ul>
                <p className='fs-5'>Resumes</p>
                <li><Link to="">Resume Builder</Link></li>
                <li><Link to="">Resume Templates</Link></li>
                <li><Link to="">Resume Formats</Link></li>
                <li><Link to="">How to write a resume</Link></li>
              </ul>
            </Col>
            <Col>
              <ul>
                <p className='fs-5'>Follow Us</p>
                <li><Link to=""><i class="fa-brands fa-facebook"></i>Facebook</Link></li>
                <li><Link to=""><i class="fa-brands fa-twitter"></i>Twitter</Link></li>
                <li><Link to=""><i class="fa-brands fa-linkedin"></i>Linkdin</Link></li>
                <li><Link to=""><i class="fa-brands fa-pinterest"></i>Pinterest</Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer_2'>
        <Container>
          <div className='justify-content-between'>
          <span>
            MaxkerResumeMaker
          </span>
          <span>
            ©
            <span>2023</span>
            , Bold Limited. All rights reserved.
          </span>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer;
