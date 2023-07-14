import { BUY_CHOCOLATE_MILK_SHAKE } from "../../type/types";

export const buyChocolateMilkShake = (data) => {
    return{
        type : BUY_CHOCOLATE_MILK_SHAKE,
        payload : data
    }
}