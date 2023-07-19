import { USER_LOG_IN } from "../type/type";
// import { USER_LOG_OUT } from "../type/type";

export const userLogIn = (data) => {
    return{
        type : USER_LOG_IN,
        value : data
    }
}