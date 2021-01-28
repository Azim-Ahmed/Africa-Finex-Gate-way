import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Container, Row, Col, Button } from 'reactstrap';
import { UserContext } from '../../App';

const LocalbankthirdPage = () => {
    const BankName = [
        {
            name: "Central Bank"
        },
        {
            name: "Coast Bank"
        },
        {
            name: "North-state Bank"
        }
    ]

    const [dropdownOpen, setOpen] = useState(false);
    const [localBank, setLocalBank] = useState("")
    const { buyerData, quantity, buyerDataPost, setBuyerDataPost, walletID } = useContext(UserContext)

    buyerDataPost.name = buyerData;
    buyerDataPost.bankName = localBank;
    buyerDataPost.quantityItem = quantity;
    buyerDataPost.walletId = walletID;
    buyerDataPost.swapId = Math.floor(Math.random() * 1138913219272982)



    console.log(buyerData);
    console.log(buyerDataPost);
    setBuyerDataPost(buyerDataPost);
    // setBuyerDataPost(data)

    const toggle = () => setOpen(!dropdownOpen);
    return (
        <Container>
            <Row className="mt-5">
                <Col sm={12} md={{ size: 6, offset: 3 }}>
                    <ButtonDropdown className="mb-5" isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle color="primary" caret>
                            Choose a local Bank
        </DropdownToggle>
                        <DropdownMenu className="text-dark">
                            {BankName.map((bank, i) => <DropdownItem
                                onClick={() => setLocalBank(bank.name)}
                                key={i}
                            >
                                {bank.name}</DropdownItem>)}
                        </DropdownMenu>
                    </ButtonDropdown>

                    <strong>
                        <p className="mt-5 text-dark">
                            Transfers between banks are usually faster.
                            If available give  preference to your local
                            bank and the system will automatically find
                            the best P2P for you.
                       </p>
                    </strong>


                    <Link to="/"><p className=" my-5" >How long does it usually take ?</p></Link>
                    <Link to="/transferofbuyer">
                        <Button block size="lg" type="submit" color="danger">Next</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default LocalbankthirdPage;





