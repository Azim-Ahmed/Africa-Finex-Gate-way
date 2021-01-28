import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="serviceBackground pt-2 pb-4">
            <Container>
                <Row className=" mt-5">
                    <Col className="text-center my-4" md={5} lg={5} sm={12} xs={12}>
                        <img width="30%" className="pb-4" src="" alt="" />
                        <div className="text-center">
                            <h3 className="text-warning">A trustwory exchange site</h3>
                        </div>
                    </Col>
                    <Col className="text-center my-4" md={2} lg={2} sm={12} xs={12}>
                        <ul className="list-unstyled">
                            <li>Features</li>
                            <li>Enterprise</li>
                            <li>Pricing</li>
                        </ul>
                    </Col>
                    <Col className="text-center my-4" md={2} lg={2} sm={12} xs={12}>
                        <ul className="list-unstyled">
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>Status</li>
                        </ul>
                    </Col>
                    <Col className="text-center my-4" md={2} lg={2} sm={12} xs={12}>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Terms of Service</li>
                            <li>Security</li>
                            <li>Login</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;