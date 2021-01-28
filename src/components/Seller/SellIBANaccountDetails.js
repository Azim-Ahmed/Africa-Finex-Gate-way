
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { UserContext } from '../../App';

const SellIBANaccountDetails = () => {

    //states of the components 
    const { sellerData } = useContext(UserContext)
    const [IBANaccount, setIBANaccount] = useState('')

    // adding data to the store
    sellerData.IBANAcc = IBANaccount;
    sellerData.TXID = Math.floor(Math.random() * 1138913219272982)

    return (
        <Container className="text-center mt-4">
            <Row className=" mt-5">
                <Col className="sell_section_two_card_background" sm={12} md={{ size: 6, offset: 3 }}>
                    <input
                        onBlur={(e) => setIBANaccount(e.target.value)}
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

export default SellIBANaccountDetails;