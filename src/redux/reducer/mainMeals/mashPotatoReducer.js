import { BUY_MASH_POTATO } from "../../type/types";
import mashPotato from '../../../assets/images/page/mashPotato.jpg'

const initialState = {
    imageSrc:`${mashPotato}`,
    name : 'Mash Potato With Fried Prawns',
    section : 'Salad Section',
    description : 'Mash Potato With Fried Prawns',
    price : 'Rs 1150',
    qty : 100
}

const mashPotatoReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_MASH_POTATO : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default mashPotatoReducer