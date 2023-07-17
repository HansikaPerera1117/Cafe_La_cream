import { BUY_NOODLES} from "../../type/types";

export const buyNoodles=(data)=>{
    return{
        type : BUY_NOODLES,
        payload : data
    }
}