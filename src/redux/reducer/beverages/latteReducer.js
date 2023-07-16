import { BUY_LATTE } from "../../type/types";
import latte from '../../../assets/images/page/latte.jpg'

const initialState = {
    imageSrc:`${latte}`,
    name : 'Coffee Latte With Marshmallow',
    section : 'Beverages Section',
    description : 'Coffee Latte With Marshmallow',
    price : 'Rs 750',
    qty : 100
}

const latteReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_LATTE : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default latteReducer