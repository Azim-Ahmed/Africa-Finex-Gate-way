import { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Container, Row, Col, Button } from 'reactstrap';
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






const LocalbankthirdPage = (props) => {

    const { bankName, swapId } = props.buyerDataPost;
    const BankName = [
        {
            name: "Central Bank"
        },
        {
            name: "Coast Bank"
        },
        {
            name: "North-state Bank"
        },
        {
            name: "Modhumoti Bank"
        }
    ]

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    return (
        <Container>
            <Row className="mt-5">
                <Col className="buyer_background_page_two" sm={12} md={{ size: 6, offset: 3 }}>
                    <ButtonDropdown
                        className="mb-5"
                        isOpen={dropdownOpen}
                        toggle={toggle}>
                        <DropdownToggle color="primary" caret>
                            Choose a local Bank
                        </DropdownToggle>
                        <DropdownMenu className="text-dark">
                            {BankName.map((bank, i) =>
                                <DropdownItem
                                    onClick={() => props.setBuyerData({ ...props.buyerDataPost, bankName: bank.name, swapId: Math.floor(Math.random() * 1138913219272982) })}
                                    key={i}
                                >
                                    {bank.name}</DropdownItem>)}
                        </DropdownMenu>
                    </ButtonDropdown>
                    {bankName ?
                        <h4>
                            You have choosen <span className="text-info"> {bankName} </span> <br />  <br />
                          Your SwapId :  <span className="text-info"> {swapId} </span>
                        </h4> : ""}
                    <strong>
                        <p className="mt-5 text-dark">
                            Transfers between banks are usually faster.
                            If available give  preference to your local
                            bank and the system will automatically find
                            the best P2P for you.
                       </p>
                    </strong>
                    <Link to="/">
                        <p className="text-center my-5" >How long does it usually take ?</p>
                    </Link>
                    <Link to={bankName ? '/transferofbuyer' : "/localbank"}>
                        <Button block size="lg" type="submit" color="warning">Next</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(LocalbankthirdPage);

