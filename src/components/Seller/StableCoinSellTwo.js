import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { UserContext } from '../../App';

const StableCoinSellTwo = () => {

    //states of the components 
    const { sellerData } = useContext(UserContext)
    const [walletData, setWalletData] = useState('')

    sellerData.walletAddress = walletData;
    console.log(sellerData);
    return (
        <Container className=" mt-5">
            <Row>
                <Col sm={12} md={{ size: 6, offset: 3 }}>

                    <form className="sell_section_two_card_background"
                    >
                        <input
                            onBlur={(e) => setWalletData(e.target.value)}
                            className="form-control"
                            placeholder="BSC Wallet address"
                            type="text"
                        />

                        <strong>
                            <p className="mt-5 text-dark">
                                if for some reason we can not procced with your sale ( which is rare) we will
                                completely return your assets . please provide a BSC valid wallet
                                address that you have access to pay close attention to not input
                                any incorrect infomation.
                        </p>
                        </strong>

                        <Link to="/">
                            <p className="my-5 text-center">Don't have a BSC Wallet yet?</p>
                        </Link>

                        <Link to="/sellibnaccount">
                            <Button block size="lg" type="submit" color="warning">Next</Button>
                        </Link>

                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default StableCoinSellTwo;