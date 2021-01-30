import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, CardTitle, CardText, Card } from 'reactstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Container>
            <Row className=" text-center mt-5">
                <Col className="sm-offset-1  my-4" md={{ size: 5, offset: 1 }} sm={12} xs={12}>
                    <Link to="/buySection">
                        <Card body inverse className="Card_background">
                            <CardTitle tag="h5">Stablecoin gateway - BUY</CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                        </CardText>
                            <Button color="dark" outline={true}><strong>Buy Section</strong></Button>
                        </Card>
                    </Link>
                </Col>
                <Col className="sm-offset-1  my-4" md={{ size: 5 }} sm={12} xs={12}>
                    <Link to="/stablecoinsellone">
                        <Card body inverse className="Card_background">
                            <CardTitle tag="h5">Stablecoin gateway - SELL</CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                        </CardText>
                            <Button color="dark" outline={true}> <strong> Sell Section</strong></Button>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;