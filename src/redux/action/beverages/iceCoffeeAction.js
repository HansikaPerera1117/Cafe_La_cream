import { BUY_ICE_COFFEE } from "../../type/types";

export const buyIceCoffee = (data) => {
    return{
        type : BUY_ICE_COFFEE,
        payload : data
    }
}