import { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { UserContext } from '../../App';


let WAValidator = require('wallet-address-validator');

const BuyerSecondPage = () => {

    let history = useHistory();
    const searchInput = useRef('');
    const { walletID, setWalletID } = useContext(UserContext)


    const submitData = (e) => {
        e.preventDefault()
    }
    const validateKey = () => {
        const InputData = searchInput.current.value;
        var valid = WAValidator.validate(InputData, 'BTC');

        if (valid) {
            history.push("/localbank")
            setWalletID(InputData)
        }
        else
            alert('This is a inValid address');
    }

    //1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck
    return (
        <Container className=" mt-5">
            <Row>
                <Col sm={12} md={{ size: 6, offset: 3 }}>
                    <p>{walletID}</p>
                    <form onSubmit={submitData}>
                        <input
                            ref={searchInput}
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
                        <Button onClick={validateKey} block size="lg" type="submit" color="danger">Next</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default BuyerSecondPage;