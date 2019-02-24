import { combineReducers } from 'redux'
import * as loginReducer from './loginReducer'

export interface AppReducerState {
    login: loginReducer.LoginReducerState;
}

export const initialState = {
    login: loginReducer.initialState,
}

export const reducer = combineReducers({
    login: loginReducer.reducer,
})
