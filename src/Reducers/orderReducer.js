import { ADDRESS } from '../Actions/Types';


const initialState = {
    address:{}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADDRESS:
            return {
                ...state , address:action.payload
            }
        default:
            return state
    }
}