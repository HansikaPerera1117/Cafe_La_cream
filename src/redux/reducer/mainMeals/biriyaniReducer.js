import { BUY_BIRIYANI } from "../../type/types";
import biriyani from '../../../assets/images/page/biriyani.jpg'

const initialState = {
    imageSrc:`${biriyani}`,
    name : 'Chicken Biriyani with Raita',
    section : 'Biriyani Section',
    description : 'Indian Chicken Biriyani with Raita',
    price : 'Rs 1650',
    qty : 100
}

const biriyaniReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_BIRIYANI : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default biriyaniReducer