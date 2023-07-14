import { BUY_MOHITO } from "../../type/types"
import mohito from '../../../assets/images/page/mohito.jpg'

const initialState = {
    imageSrc:`${mohito}`,
    name : 'Mohito (Alcoholic/Non-Alcoholic)',
    section : 'Beverages Section',
    description : 'Mohito (Alcoholic/Non-Alcoholic)',
    price : 'Rs 350',
    qty : 100
}

const mohitoReducer = (state = initialState , action) => {
    // console.log(state);
    switch(action.type){
        case BUY_MOHITO : 
            return{
                data: action.payload
            }  
        default : return state
    }
}

export default mohitoReducer