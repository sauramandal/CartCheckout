import { PROMO_CODE } from '../actions/types';

const initialState = {
    open: false,
    value: ''
};

export default function(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case PROMO_CODE:
            return {
                ...state,
                value: payload
            }
        default:
            return state;
    }
}