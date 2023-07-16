import { BUY_STRAWBERRY_MILK_SHAKE} from "../../type/types";

export const buyStrawberryMilkShake = (data) => {
    return{
        type : BUY_STRAWBERRY_MILK_SHAKE,
        payload : data
    }
}