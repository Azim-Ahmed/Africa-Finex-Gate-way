import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { UserContext } from '../../App';

let WAValidator = require('wallet-address-validator');

const StableCoinSellTwo = () => {

    let history = useHistory();

    //states of the components 
    const { sellerData } = useContext(UserContext)
    const [walletData, setWalletData] = useState('')
    //adding data to the store
    sellerData.walletAddress = walletData;
    console.log(sellerData);

    //funtions of this component
    const validateKey = () => {

        var valid = WAValidator.validate(walletData, 'BTC');

        if (valid) {

            history.push("/sellibnaccount")


        }
        else {
            alert('This is a inValid address');
            history.push("/stablecoinselltwo")
        }

    }
    return (
        <Container className=" mt-5">
            <Row>
                <Col sm={12} md={{ size: 6, offset: 3 }}>

                    <form className="sell_section_two_card_background"
                    >
                        <p className="mb-5">
                            Check with this wallet address<br />
                            1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck
                    </p>
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
                        <Button
                            onClick={validateKey}
                            block
                            size="lg"
                            type="submit"
                            color="warning"
                        > Next
                            </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default StableCoinSellTwo;