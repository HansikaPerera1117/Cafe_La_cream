import { BUY_SPAGHETTI } from "../../type/types";
import spaghetti from '../../../assets/images/page/spaghetti.jpg'

const initialState = {
    imageSrc:`${spaghetti}`,
    name : 'Spaghetti With Spicy Chicken Source',
    section : 'Pasta Section',
    description : 'Spaghetti With Spicy Chicken Tomato Source',
    price : 'Rs 1350',
    qty : 100
}

const spaghettiReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_SPAGHETTI : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default spaghettiReducer