import { BUY_SPAGHETTI } from "../../type/types";

export const buySpaghetti=(data)=>{
    return{
        type : BUY_SPAGHETTI,
        payload : data
    }
}