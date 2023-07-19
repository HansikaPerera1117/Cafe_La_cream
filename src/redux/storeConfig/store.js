import {createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import loginReducer from '../reducer/loginReducer';

const store = createStore(loginReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store