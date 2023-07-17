import { BUY_CHICKEN_CHEESE_BURGER } from "../../type/types";
import cheesBurger from '../../../assets/images/page/cheesBurger.jpg'

const initialState = {
    imageSrc:`${cheesBurger}`,
    name : 'Double Cheese Chicken Burger',
    section : 'Burger Section',
    description : 'Double Cheese Chicken Burger With French Fries',
    price : 'Rs 950',
    qty : 100
}

const chickenCheeseBurgerReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_CHICKEN_CHEESE_BURGER : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default chickenCheeseBurgerReducer