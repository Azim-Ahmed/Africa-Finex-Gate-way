import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'reactstrap';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './buyer.css'
import { connect } from 'react-redux';
import { setBuyerData } from '../../redux/actionCreators'


const mapDispatchToProps = dispatch => {
    return {
        setBuyerData: data => dispatch(setBuyerData(data)),
    }
}

const mapStateToProps = (state) => {
    return {
        buyerDataPost: state.buyerDataPost
    }
}

const SelectedCoin = (props) => {

    let history = useHistory();


    const { name, quantityItem } = props.buyerDataPost;


    //store of this component
    const [dropdownOpen, setOpen] = useState(false);
    const [countriesData, setCountriesData] = useState([]);

    //using react hook for componentDidMount
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountriesData(data))
    }, [props.buyerData])


    const toggle = () => setOpen(!dropdownOpen);

    const handleSubmitCoin = () => {
        if (!quantityItem) {
            alert("please input correctly")
            history.push("/")
        }
        else if (!name) {
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
                                    onClick={() => props.setBuyerData({ ...props.buyerDataPost, name: item.name })}
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
                        name ?
                            <h4 className=" my-5">
                                Your country name is <span className="text-info">{name}</span>
                            </h4> : ""
                    }
                    <Form>
                        <input
                            className="form-control"
                            onBlur={(e) => props.setBuyerData({ ...props.buyerDataPost, quantityItem: e.target.value })}
                            required={true}
                            placeholder="Quantity"
                            type="number"
                            id="" />
                        <br />
                        {quantityItem ?
                            <h4 className="my-5">
                                You have entered quantity :
                              <span className="text-info">{quantityItem}</span>
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



export default connect(mapStateToProps, mapDispatchToProps)(SelectedCoin);