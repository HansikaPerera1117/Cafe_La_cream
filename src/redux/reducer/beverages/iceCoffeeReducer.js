import { BUY_ICE_COFFEE } from "../../type/types";
import iceCoffe from '../../../assets/images/page/iceCoffe.jpg'

const initialState = {
    imageSrc:`${iceCoffe}`,
    name : 'Ice Coffee with Whip Cream',
    section : 'Beverages Section',
    description : 'Ice Coffee with Whip Cream',
    price : 'Rs 650',
    qty : 100
}

const iceCoffeeReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_ICE_COFFEE : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default iceCoffeeReducer