import { BUY_CHOCOLATE_MILK_SHAKE } from "../../type/types";
import chocoMS from '../../../assets/images/page/chocoMS.jpg'

const initialState = {
    imageSrc:`${chocoMS}`,
    name : 'Chocolate Milk Shake With Choco Bolls',
    section : 'Beverages Section',
    description : 'Chocolate Milk Shake With Choco Bolls',
    price : 'Rs 850',
    qty : 100
}

const chocolateMilkShakeReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_CHOCOLATE_MILK_SHAKE : 
            return{
                data : action.payload
            }
        default : return state
    }
}

export default chocolateMilkShakeReducer