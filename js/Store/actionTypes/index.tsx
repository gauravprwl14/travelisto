import * as commonHelpers from '../../utils/helpers/'
import * as commonInterfaces from '../../utils/types/interface'
import loginActionTypes from './loginActionTypes'

const arrayOfActions: commonInterfaces.ReduxActionTypes[] = [loginActionTypes]

function createReduxActions(actionArr: commonInterfaces.ReduxActionTypes[] = []): commonInterfaces.CommonObject {
    let actionTypesObj = {}
    actionArr.forEach((actionType) => {
        const asyncAction = commonHelpers.createAsyncActions(actionType.async)
        const syncAction = commonHelpers.createAsyncActions(actionType.sync)
        
        actionTypesObj = {
            ...actionTypesObj,
            ...asyncAction,
            ...syncAction,
        }
    })
    return actionTypesObj
}

const actionTypes: commonInterfaces.CommonObject = createReduxActions(arrayOfActions)

export default actionTypes
