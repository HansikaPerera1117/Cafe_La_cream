import { BUY_PINAPPLE_MILK_SHAKE } from "../../type/types";
import pinapleMS from '../../../assets/images/page/pinapleMS.jpg'

const initialState = {
    imageSrc:`${pinapleMS}`,
    name : 'Pinapple Milk Shake With Whip Cream',
    section : 'Beverages Section',
    description : 'Pinapple Milk Shake With Whip Cream',
    price : 'Rs 750',
    qty : 100
}

const pinappleMilkShakeReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_PINAPPLE_MILK_SHAKE : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default pinappleMilkShakeReducer