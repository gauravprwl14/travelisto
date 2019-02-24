import * as commonConstants from '../constants/index'
import * as commonInterfaces from '../types/interface'

export const createAsyncActionType = (actionType: string) => {
    const obj: commonInterfaces.CommonObject = {}
    
    Object.keys(commonConstants.ASYNC_ACTION_PREFIX)
    .forEach((prefix) => {
        obj[`${actionType}_${prefix}`] = `${actionType}_${prefix}`
    })

    return obj
}


export const createSyncActionType = (actionType: string) => {
    const obj: commonInterfaces.CommonObject = {}
    obj[actionType] = actionType
    return obj
}



// These functions are for generating a list of types
export const createAsyncActions = (actionTypes: commonInterfaces.CommonObject = {}) => {
    let obj = {}
    Object.keys(actionTypes).forEach((actionType) => {
        obj = {
            ...obj,
            ...createAsyncActionType(actionType),
        }
    })
    return obj
}
export const createSyncActions = (actionTypes: commonInterfaces.CommonObject = {}) => {
    let obj = {}
    Object.keys(actionTypes).forEach((actionType) => {
        obj = {
            ...obj,
            ...createSyncActionType(actionType),
        }
    })
    return obj
}
