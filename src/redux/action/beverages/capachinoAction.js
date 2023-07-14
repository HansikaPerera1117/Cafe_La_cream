import { BUY_CAPACHONO } from "../../type/types";

export const buyCapachino = (data) =>{
    return{
        type : BUY_CAPACHONO,
        payload : data
    }
}

export default buyCapachino