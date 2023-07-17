import { BUY_MASH_POTATO } from "../../type/types";

export const buyMashPotato=(data)=>{
    return{
        type : BUY_MASH_POTATO,
        payload : data
    }
}