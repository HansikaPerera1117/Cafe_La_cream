import { USER_LOG_IN } from "../type/type";

const initialState = {
    isLogIn : false,
}

const loginReducer = (state = initialState , action) => {

    switch(action.type){
        case USER_LOG_IN : 
            return{
                ...state,
                isLogIn : action.value.isLogIn ? action.value.isLogIn : action.value,
            }

        default:
             return state;
    }
    

}

export default loginReducer