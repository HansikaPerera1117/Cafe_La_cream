import { combineReducers } from "redux"

import mohitoReducer from "./beverages/mohitoReducer"
import bubbleTeaReducer from "./beverages/bubbleTeaReducer"
import capachinoReducer from "./beverages/capachinoReducer"
import chocolateMilkShakeReducer from "./beverages/chocolateMSReducer"

const rootReducer = combineReducers({
    mohito : mohitoReducer,
    bubbleTea : bubbleTeaReducer,
    capachino : capachinoReducer,
    chocolateMS : chocolateMilkShakeReducer,

})

export default rootReducer