import { BUY_SANDWITCH } from "../../type/types";

export const buySandwitch=(data)=>{
    return{
        type : BUY_SANDWITCH,
        payload : data
    }
}