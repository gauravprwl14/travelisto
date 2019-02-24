import * as commonInterfaces from '../../utils/types/interface'
import reduxActionTypes from '../actionTypes/'

export interface LoginReducerState {
    isLoading: boolean;
}

export const initialState = {
    isLoading: false,
}

export const reducer = (
    state: LoginReducerState = initialState,
    action: commonInterfaces.ReduxAction<any>
) => {
    switch (action.type) {
        case reduxActionTypes.USER_LOGIN_REQUEST: {
            console.log(
                '%c INSIDE  USER_LOGIN_REQUEST',
                'background: aqua; color: black',
                action
            )
            return {
                ...state,
                isLoading: true,
            }
        }
        default: {
            return state
        }
    }
}
