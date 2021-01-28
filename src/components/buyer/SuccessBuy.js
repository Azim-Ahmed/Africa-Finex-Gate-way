import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SuccessBuy = () => {
    return (
        <Container className=" mt-5">
            <Row>
                <Col sm={12} md={{ size: 6, offset: 3 }}>
                    <h3 className="text-dark">
                        Congratulations!
                         <br /> Successfully bought this StableCoin
                    </h3>
                </Col>
            </Row>
        </Container>
    );
};

export default SuccessBuy;