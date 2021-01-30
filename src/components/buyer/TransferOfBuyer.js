import React from 'react';
import { useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const TransferOfBuyer = () => {
    //store of the application
    const { buyerDataPost } = useContext(UserContext)

    //post method to the server
    const handleBuyingData = () => {
        fetch('https://obscure-shelf-14162.herokuapp.com/buyerdata',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(buyerDataPost)
            }
        )
    }

    return (
        <Container>
            <Row>
                <Col className="buyer_background_page_transfer" sm={12} md={{ size: 6, offset: 3 }}>
                    <h4 className="mb-5">Transfer funds to the  following account</h4>
                    <div className="my-5">
                        <h3>IBAN : <span className="text-info">SJK3EIU34J2K4</span></h3>
                        <h3>SWAP ID : <span className="text-info">{buyerDataPost.swapId}</span></h3>
                    </div>

                    <strong>
                        <p className="my-5">
                            As soon as the funds received the the
                            transection to your BSC  wallet will
                            be made the following address. <br />
                            <br />
                          wallet Address: <span className="text-info">{buyerDataPost.walletId}</span>
                        </p>
                    </strong>

                    <Link><p className="text-center">Doubts ? Discord or telegram.</p></Link>
                    <Link to="/success">
                        <Button
                            className="text-center mt-5"
                            type="submit"
                            block
                            onClick={handleBuyingData}
                            size="lg"
                            color="danger"
                        >Buy Now</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default TransferOfBuyer;