import { BUY_SANDWITCH } from "../../type/types";
import sandwitch from '../../../assets/images/page/sandwitch.jpg'

const initialState = {
    imageSrc:`${sandwitch}`,
    name : 'Chicken & Backen Sandwitch',
    section : 'Sandwitch Section',
    description : 'Chicken & Backen Sandwitch With French Fries',
    price : 'Rs 1250',
    qty : 100
}

const sandwitchReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_SANDWITCH : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default sandwitchReducer