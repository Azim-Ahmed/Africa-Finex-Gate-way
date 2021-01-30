import * as actionTypes from './actionTypes';

const initState = {
    buyerDataPost: {
        name: "",
        bankName: "",
        quantityItem: "",
        walletId: "",
        swapId: ''
    },
    sellerDataPost: {
        token: "",
        sellingQuantity: "",
        walletAddress: "",
        IBANAcc: "",
        TXID: "",
        TXIdInfo: ""
    }
}


const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.SET_BUYER_DATA:
            // console.log(action.payload);
            return {
                ...state,
                buyerDataPost: action.payload,
            }
        case actionTypes.SET_SELLER_DATA:
            // console.log(action.payload);
            return {
                ...state,
                sellerDataPost: action.payload,
            }
        default:
            return state;
    }
}
export default rootReducer
