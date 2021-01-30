import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { UserContext } from '../../App';


let WAValidator = require('wallet-address-validator');

const BuyerSecondPage = () => {

    let history = useHistory();
    //states and store of this component
    const { buyerDataPost } = useContext(UserContext)
    const [walletID, setWalletID] = useState("")

    //updating store
    buyerDataPost.walletId = walletID;


    //validate method
    const validateKey = () => {
        var valid = WAValidator.validate(walletID, 'BTC');

        if (valid) {
            history.push("/localbank")
        }
        else {
            alert('This is a inValid address ');
            history.push("/buyerSecondPage")
        }
    }

    return (
        <Container className=" mt-5">
            <Row>
                <Col className="buyer_background_page_two" sm={12} md={{ size: 6, offset: 3 }}>
                    <p>
                        Check with this wallet<br />
                    1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck
                    </p>

                    <input
                        onBlur={(e) => setWalletID(e.target.value)}
                        className="form-control"
                        placeholder="Enter Your BSC Wallet"
                        type="text"
                    />
                    <h4 className=" mt-5">You will receive your TAOA in this address</h4>
                    <strong>
                        <p className="mt-5 text-danger">
                            Pay close attention mistakes will make you loose all your assets
                            and there is nothing we can to help
                            </p>
                    </strong>
                    <Link to="/">
                        <p className="my-5 text-center">Don't have a BSC Wallet yet?</p>
                    </Link>
                    <Button onClick={validateKey} block size="lg" type="submit" color="warning">Next</Button>

                </Col>
            </Row>
        </Container>
    );
};

export default BuyerSecondPage;