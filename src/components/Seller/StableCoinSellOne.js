import { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './seller.css'
import { setSellerData } from '../../redux/actionCreators'




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

const StableCoinSellOne = (props) => {

    const { sellingQuantity, token } = props.sellerDataPost;

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
    const [dropdownOpen, setOpen] = useState(false);
    //functions of this components
    const toggle = () => setOpen(!dropdownOpen);


    return (
        <Container className="text-center mt-4">
            <Row>
                <Col className="sell_section_card_background" sm={12} md={{ size: 6, offset: 3 }}>
                    <h3>Stablecoin gateway - SELL</h3>
                    <ButtonDropdown
                        className="mt-4"
                        isOpen={dropdownOpen}
                        toggle={toggle}
                    >
                        <DropdownToggle color="primary" caret>
                            Choose a token
                         </DropdownToggle>
                        <DropdownMenu className="mdb-select md-form">
                            {tokens.map((item, i) =>
                                <DropdownItem
                                    key={i}
                                    onClick={() => props.setSellerData({ ...props.sellerDataPost, token: item.name })}
                                >
                                    {item.name}
                                </DropdownItem>)}
                        </DropdownMenu>
                    </ButtonDropdown>
                </Col>
            </Row>
            <Row className=" mt-5">
                <Col className="sell_section_card_background" sm={12} md={{ size: 6, offset: 3 }}>
                    {token ?
                        <h5 className="mt-2 mb-5">
                            You have  choosen  <span className="text-info">{token}</span>
                        </h5> : ""}
                    <input
                        onBlur={(e) => props.setSellerData({ ...props.sellerDataPost, sellingQuantity: e.target.value })}
                        name="quantity"
                        type="number"
                        placeholder="Quantity"
                        className="form-control"
                    />
                    <br />
                    <h4 className="my-5">You will get X AOA  @Preco  TAOA/AOA</h4>

                    {/* condition routing must */}
                    <Link to={token && sellingQuantity ? "/stablecoinselltwo" :
                        "stablecoinsellone"}>
                        <Button
                            className="text-center mt-4"
                            type="submit"
                            block
                            size="lg"
                            color="danger"
                        >Sell now
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(StableCoinSellOne);