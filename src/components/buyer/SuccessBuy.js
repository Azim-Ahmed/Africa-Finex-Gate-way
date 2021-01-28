import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

const SuccessBuy = () => {
    return (
        <Container className=" mt-5">
            <Row>
                <Col sm={12} md={{ size: 6, offset: 3 }}>
                    <h3 className="text-dark p-5">
                        Congratulations!
                         <br /> Successfully bought this StableCoin
                    </h3>

                    <Link to="/stablecoinsellone">
                        <Button
                            outline={true}
                            block
                            color="warning"
                            className="text-dark mt-5"
                        > <strong>Want to sell coin ?</strong>
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default SuccessBuy;