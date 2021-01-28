import { useContext, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './seller.css'
import { UserContext } from '../../App';

const StableCoinSellOne = () => {

    //dummy token data
    const tokens = [
        {
            name: "DSFHSHW44324"
        },
        {
            name: "SDFKIGH32324B"
        },
        {
            name: "DFSG34245BKBK"
        },
        {
            name: "DFSG342LDFSKL"
        }
    ]



    //states of this component
    const { sellerData } = useContext(UserContext)
    const [sellQuantity, setSellQuantity] = useState('')
    const [token, setToken] = useState('')
    const [dropdownOpen, setOpen] = useState(false);

    //integrate data to the store
    sellerData.token = token;
    sellerData.sellingQuantity = sellQuantity;


    //functions of this components
    const toggle = () => setOpen(!dropdownOpen);
    return (
        <Container className="text-center mt-4">
            <Row>
                <Col className="sell_section_card_background" sm={12} md={{ size: 6, offset: 3 }}>
                    <h3>Stablecoin gateway - SELL</h3>
                    <ButtonDropdown className="mt-4" isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle color="primary" caret>
                            Choose a token
                         </DropdownToggle>
                        <DropdownMenu className="mdb-select md-form">
                            {tokens.map((item, i) =>
                                <DropdownItem
                                    key={i}
                                    onClick={() => setToken(item.name)}
                                >
                                    {item.name}
                                </DropdownItem>)}
                        </DropdownMenu>
                    </ButtonDropdown>
                </Col>
            </Row>
            <Row className=" mt-5">
                <Col className="sell_section_card_background" sm={12} md={{ size: 6, offset: 3 }}>
                    {sellerData.token ? <h5 className="my-4">{sellerData.token}</h5> : ""}
                    <input
                        onBlur={(e) => setSellQuantity(e.target.value)}
                        name="quantity"
                        placeholder="Quantity"
                        className="form-control"
                    />
                    <br />
                    <h4 className="my-5">You will get X AOA  @Preco  TAOA/AOA</h4>

                    {/* condition routing must */}
                    <Link to="/stablecoinselltwo">
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

export default StableCoinSellOne;