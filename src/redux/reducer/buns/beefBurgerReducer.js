import { BUY_BEEF_BURGER } from "../../type/types";
import beefBerger from '../../../assets/images/page/beefBerger.jpg'

const initialState = {
    imageSrc:`${beefBerger}`,
    name : 'Beef Burger With French Fries',
    section : 'Burger Section',
    description : 'Beef Burger With French Fries',
    price : 'Rs 1200',
    qty : 100
}

const beefBurgerReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_BEEF_BURGER : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default beefBurgerReducer