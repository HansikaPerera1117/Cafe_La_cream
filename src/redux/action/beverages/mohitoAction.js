import { BUY_MOHITO } from "../../type/types"

 export const buyMohito =(data) =>{
    // console.log(data);
    return{
        type : BUY_MOHITO,
        payload: data
    }
 }