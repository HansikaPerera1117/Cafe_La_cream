import { BUY_CHICKEN_CHEESE_BURGER } from "../../type/types";

export const buyChickenCheeseBurger=(data)=>{
    return{
        type : BUY_CHICKEN_CHEESE_BURGER,
        payload : data
    }
}