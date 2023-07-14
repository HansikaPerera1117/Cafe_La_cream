import { BUY_BUBBLE_TEA } from "../../type/types";

export const buyBubbleTea=(data)=>{
    return{
        type : BUY_BUBBLE_TEA,
        payload : data
    }
}