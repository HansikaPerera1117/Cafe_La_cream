import { BUY_PINAPPLE_MILK_SHAKE} from "../../type/types";

export const buyPinappleMilkShake = (data) => {
    return{
        type : BUY_PINAPPLE_MILK_SHAKE,
        payload : data
    }
}