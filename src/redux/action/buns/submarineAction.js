import { BUY_SUBMARINE } from "../../type/types";

export const buySubmarine=(data)=>{
    return{
        type : BUY_SUBMARINE,
        payload : data
    }
}