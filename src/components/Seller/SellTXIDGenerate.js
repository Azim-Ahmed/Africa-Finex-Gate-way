import { useRef, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { UserContext } from '../../App';

const SellTXIDGenerate = () => {
    //states of the components 
    const { sellerData } = useContext(UserContext)
    const [TXIDGenerate, setTXIDGenerate] = useState("")
    console.log(TXIDGenerate);

    sellerData.TXIdInfo = TXIDGenerate;
    console.log(sellerData);

    const handleSellingCoinData = () => {

        fetch('http://localhost:4000/sellerdata',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(sellerData)
            }
        )
    }

    return (
        <Container className=" mt-5">
            <Row>
                <Col sm={12} md={{ size: 6, offset: 3 }}>
                    <h5>Transfer your token "Token ID" to the following BSC(Binance Smart Chain)
                        address and enter the resulting TXID </h5>
                    <h4 className="mt-5" >This will be TXID dynamic</h4>
                    <form>
                        <input
                            onBlur={(e) => setTXIDGenerate(e.target.value)}
                            className="form-control mt-5"
                            placeholder="TXID mandatory Info"
                            type="text"
                        />
                        <strong>
                            <p className="mt-5 text-danger">
                                Pay close attention mistakes will make you loose all
                                your assets and there is nothing we can to help
                             </p>
                        </strong>
                        <Link to="/sellfinishedinfo">
                            <Button
                                className="mt-5"
                                onClick={handleSellingCoinData}
                                block
                                size="lg"
                                type="submit"
                                color="danger"
                            >
                                Done</Button>
                        </Link>

                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default SellTXIDGenerate;