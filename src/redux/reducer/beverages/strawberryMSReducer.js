import { BUY_STRAWBERRY_MILK_SHAKE } from "../../type/types";
import stberyMS from '../../../assets/images/page/stberyMS.jpg'

const initialState = {
    imageSrc:`${stberyMS}`,
    name : 'Strawberry Milk Shake With Wonder Cone',
    section : 'Beverages Section',
    description : 'Strawberry Milk Shake With Wonder Cone',
    price : 'Rs 850',
    qty : 100
}

const strawberryMilkShakeReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_STRAWBERRY_MILK_SHAKE : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default strawberryMilkShakeReducer