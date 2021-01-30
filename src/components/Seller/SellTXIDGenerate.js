import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { setSellerData } from '../../redux/actionCreators';

//declaring data from the redux
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

const SellTXIDGenerate = (props) => {


    const { token, TXID } = props.sellerDataPost;
    const sellerDataPost = props.sellerDataPost;

    const handleSellingCoinData = () => {

        fetch('https://obscure-shelf-14162.herokuapp.com/sellerdata',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(sellerDataPost)
            }
        )
    }

    return (
        <Container className=" mt-5">
            <Row>
                <Col className="sell_section_two_card_background" sm={12} md={{ size: 6, offset: 3 }}>
                    <h5>
                        Transfer your token <span className="text-info">{token} </span>
                         to the following BSC(Binance Smart Chain)
                        address and enter the resulting TXID
                    </h5>
                    <h4 className="mt-5" >
                        TXID :  <span className="text-info">{TXID} </span>
                    </h4>
                    <form>
                        <input
                            onBlur={(e) => props.setSellerData({ ...props.sellerDataPost, TXIdInfo: e.target.value })}
                            className="form-control mt-5"
                            placeholder="Write some TXID mandatory Info"
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
export default connect(mapStateToProps, mapDispatchToProps)(SellTXIDGenerate);
