import { BUY_BUBBLE_TEA } from "../../type/types";
import bubbleTea from '../../../assets/images/page/bubbleTea.jpg'
import { buyBubbleTea } from "../../action";


const initialState = {
    imageSrc:`${bubbleTea}`,
    name : 'Bubble Tea (Nutella)',
    section : 'Beverages Section',
    description : 'Bubble Tea (Nutella)',
    price : 'Rs 650',
    qty : 100
}

const bubbleTeaReducer = (state = initialState , action) =>{
        switch(action.type){
            case BUY_BUBBLE_TEA :
                return{
                    data : action.payload
                }

            default : return state
        }
}

export default bubbleTeaReducer