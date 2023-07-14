import { BUY_CAPACHONO } from "../../type/types";
import cappuccino from '../../../assets/images/page/cappuccino.jpg'

const initialState = {
    imageSrc:`${cappuccino}`,
    name : 'Capachino With Cokkies',
    section : 'Beverages Section',
    description : 'Capachino With Cokkies',
    price : 'Rs 450',
    qty : 100
}

const capachinoReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_CAPACHONO : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default capachinoReducer