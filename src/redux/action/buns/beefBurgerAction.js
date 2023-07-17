import { BUY_BEEF_BURGER } from "../../type/types";

export const buyBeefBurger=(data)=>{
    return{
        type : BUY_BEEF_BURGER,
        payload : data
    }
}