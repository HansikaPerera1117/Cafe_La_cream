import { BUY_SUBMARINE } from "../../type/types";
import submarine from '../../../assets/images/page/submarine.jpg'

const initialState = {
    imageSrc:`${submarine}`,
    name : 'Crispy Chicken Submarine',
    section : 'Burger Section',
    description : 'Crispy Chicken Submarine With French Fries',
    price : 'Rs 1450',
    qty : 100
}

const submarineReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_SUBMARINE : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default submarineReducer