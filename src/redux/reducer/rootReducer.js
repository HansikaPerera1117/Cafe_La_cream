import { combineReducers } from "redux"

import mohitoReducer from "./beverages/mohitoReducer"
import bubbleTeaReducer from "./beverages/bubbleTeaReducer"
import capachinoReducer from "./beverages/capachinoReducer"
import chocolateMilkShakeReducer from "./beverages/chocolateMSReducer"
import iceCoffeeReducer from "./beverages/iceCoffeeReducer"
import latteReducer from "./beverages/latteReducer"
import pinappleMilkShakeReducer from "./beverages/pineappleMSReducer"
import strawberryMilkShakeReducer from "./beverages/strawberryMSReducer"

import beefBurgerReducer from "./buns/beefBurgerReducer"
import sandwitchReducer from "./buns/sandwitchReducer"
import chickenCheeseBurgerReducer from "./buns/chickenCheeseBurgerReducer"
import submarineReducer from "./buns/submarineReducer"

import spaghettiReducer from "./mainMeals/spaghettiReducer"
import mashPotatoReducer from "./mainMeals/mashPotatoReducer"
import noodlesReducer from "./mainMeals/noodlesReducer"
import biriyaniReducer from "./mainMeals/biriyaniReducer"

const rootReducer = combineReducers({
    mohito : mohitoReducer,
    bubbleTea : bubbleTeaReducer,
    capachino : capachinoReducer,
    chocolateMS : chocolateMilkShakeReducer,
    iceCoffee : iceCoffeeReducer,
    latte : latteReducer,
    pinappleMS : pinappleMilkShakeReducer,
    strawberryMS : strawberryMilkShakeReducer,

    beefBurger : beefBurgerReducer,
    sandwitch : sandwitchReducer,
    chickenCheeseBurger : chickenCheeseBurgerReducer,
    submarine : submarineReducer,

    spaghetti : spaghettiReducer,
    mashPotato : mashPotatoReducer,
    noodles : noodlesReducer,
    biriyani : beefBurgerReducer

})

export default rootReducer