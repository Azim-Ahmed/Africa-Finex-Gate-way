import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';



const mapStateToProps = (state) => {
    return {
        sellerDataPost: state.sellerDataPost
    }
}


const SellFinishedInfo = (props) => {
    const { token, TXID, sellingQuantity } = props.sellerDataPost;

    return (
        <Container>
            <Row className="text-center">
                <Col sm={12} md={{ size: 6, offset: 3 }}>
                    <h4 className="mt-5">
                        Congratulations!
                        You have made it successfully.
                        Remember your internal transection ID .
                        If you need any customer support , you can ask for it
                    </h4>

                    <h2 className="mt-5">Token : {token}</h2>

                    <strong>
                        {props.sellerDataPost ? <p className="mt-5">
                            TXID : <span className="text-info"> {TXID},</span> <br />
                        selling Quantity: <span className="text-info">  {sellingQuantity}</span> <br />
                        timeStamp :    <span className="text-info">{new Date().toDateString()}</span>


                        </p> : ""}
                    </strong>

                    <Link to="/">
                        <Button className="mt-5" block size="lg" type="submit" color="dark">
                            I've stored the
                            ID and I'm Done
                    </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};
export default connect(mapStateToProps)(SellFinishedInfo);
