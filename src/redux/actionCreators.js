import * as actionTypes from './actionTypes'

export const setBuyerData = data => {
    // console.log(data);
    return {
        type: actionTypes.SET_BUYER_DATA,
        payload: data
    }
}

export const setSellerData = data => {
    // console.log(data);
    return {
        type: actionTypes.SET_SELLER_DATA,
        payload: data
    }
}