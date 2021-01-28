import { Container, Row, Col } from 'reactstrap';

const NoServices = () => {
    return (
        <Container className="text-center my-5">
            <Row className="mt-5">
                <Col className="text-center my-5" sm={12} md={{ size: 6, offset: 3 }}>
                    <h1>OOPS! <br />
                    no services . 404
                    </h1>
                </Col>
            </Row>
        </Container>
    );
};

export default NoServices;