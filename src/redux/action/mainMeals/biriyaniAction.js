import { BUY_BIRIYANI} from "../../type/types";

export const buyBiriyani=(data)=>{
    return{
        type : BUY_BIRIYANI,
        payload : data
    }
}