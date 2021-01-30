import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { setSellerData } from '../../redux/actionCreators';


//declaring data from the redux
const mapDispatchToProps = dispatch => {
    return {
        setSellerData: data => dispatch(setSellerData(data)),
    }
}
const mapStateToProps = (state) => {
    return {
        sellerDataPost: state.sellerDataPost
    }
}


const SellIBANaccountDetails = (props) => {

    return (
        <Container className="text-center mt-4">
            <Row className=" mt-5">
                <Col className="sell_section_two_card_background" sm={12} md={{ size: 6, offset: 3 }}>
                    <input
                        onBlur={(e) => props.setSellerData({ ...props.sellerDataPost, IBANAcc: e.target.value, TXID: Math.floor(Math.random() * 1138913219272982) })}
                        name="quantity"
                        placeholder="Enter your IBAN acc. details to be credited"
                        className="form-control my-5"
                    />
                    <br />
                    <Link><p className="text-primary text-center my-5">Where can my find my IBAN</p></Link>

                    {/* condition routing must */}
                    <Link to="/selltxidgenerate">
                        <Button
                            className="text-center mt-4"
                            type="submit"
                            block
                            size="lg"
                            color="danger"
                        >Sell now</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(SellIBANaccountDetails);
