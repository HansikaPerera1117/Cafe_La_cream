import { BUY_NOODLES } from "../../type/types";
import noodless from '../../../assets/images/page/noodless.jpg'

const initialState = {
    imageSrc:`${noodless}`,
    name : 'Sea Food Spicy Noodles',
    section : 'Noodles Section',
    description : 'Sea Food Spicy Noodles',
    price : 'Rs 1250',
    qty : 100
}

const noodlesReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_NOODLES : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default noodlesReducer