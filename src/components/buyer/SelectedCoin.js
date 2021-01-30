import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Container, Row, Col, Form } from 'reactstrap';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './buyer.css'




const SelectedCoin = () => {

    let history = useHistory();

    //store and states of this component
    const { buyerDataPost } = useContext(UserContext)
    const [dropdownOpen, setOpen] = useState(false);
    const [buyerData, setBuyerData] = useState("");
    const [quantity, setQuantity] = useState("")
    const [countriesData, setCountriesData] = useState([]);

    //storing data to the store
    buyerDataPost.name = buyerData;
    buyerDataPost.quantityItem = quantity;

    //using react hook for componentDidMount
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountriesData(data))
    }, [buyerData])


    const toggle = () => setOpen(!dropdownOpen);

    const handleSubmitCoin = () => {
        if (!quantity) {
            alert("please input correctly")
            history.push("/")
        }
        else if (!buyerData) {
            alert("please select any Bank ")
            history.push("/")
        }
        else {
            history.push("/buyerSecondPage")
        }
    }

    return (
        <Container className="text-center mt-4">
            <Row>
                <Col className="card_section_of_buy" sm={12} md={{ size: 6, offset: 3 }}>
                    <h3>Stablecoin gateway - BUY</h3>
                    <ButtonDropdown className="mt-4" isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle color="primary" caret>
                            Choose your Coin
                         </DropdownToggle>
                        <DropdownMenu className="">
                            {countriesData.map((item, i) =>
                                <DropdownItem
                                    color="warning"
                                    key={i}
                                    onClick={() => setBuyerData(item.name)}
                                >
                                    {item.name} ||
                        ${item.currencies[0].code}
                                </DropdownItem>)}
                        </DropdownMenu>
                    </ButtonDropdown>
                </Col>
            </Row>
            <Row className=" mt-5">
                <Col className="card_section_of_buy" sm={12} md={{ size: 6, offset: 3 }}>
                    {
                        buyerData ?
                            <h4 className=" my-5">
                                Your country name is <span className="text-info">{buyerData}</span>
                            </h4> : ""
                    }
                    <Form>
                        <input
                            className="form-control"
                            onBlur={(e) => setQuantity(e.target.value)}
                            required={true}
                            placeholder="Quantity"
                            type="number"
                            id="" />
                        <br />
                        {quantity ?
                            <h4 className="my-5">
                                You have entered quantity :
                              <span className="text-info">{quantity}</span>
                            </h4> : ""}


                        {/* condition routing must */}

                        <Button
                            className="text-center mt-4"
                            type="submit"
                            onClick={handleSubmitCoin}
                            block
                            size="lg"
                            color="warning"
                        >Next
                        </Button>


                    </Form>
                </Col>
            </Row>
        </Container>
    );
};



export default SelectedCoin;