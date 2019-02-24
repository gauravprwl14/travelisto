import { createStore, applyMiddleware, Store, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import sagaMiddleware from './middleware/'
import * as appReducer from './reducers'

export function configureStore(
    initialState: appReducer.AppReducerState = appReducer.initialState
) {
    const loggerMiddleware = createLogger({ duration: true })
    const middleware: Middleware[] = [sagaMiddleware]
    const enhancer = applyMiddleware(...middleware)
    if (__DEV__) {
        middleware.push(loggerMiddleware)
    }
    const store: Store<appReducer.AppReducerState> = createStore(
        appReducer.reducer,
        initialState,
        enhancer
    )
    return store
}

export default configureStore
