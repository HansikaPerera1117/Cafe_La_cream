import { BUY_LATTE } from "../../type/types";

export const buyLatte = (data) => {
    return{
        type : BUY_LATTE,
        payload : data
    }
}