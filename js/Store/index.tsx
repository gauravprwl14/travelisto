import { createStore, applyMiddleware, Store, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import sagaMiddleware from './middleware/'
import * as appReducer from './reducers'

export function configureStore(
    initialState: appReducer.AppReducerState = appReducer.initialState
) {
    const loggerMiddleware = createLogger({ duration: true })
    const middleware: Middleware[] = [sagaMiddleware]
    if (__DEV__) {
        middleware.push(loggerMiddleware)
    }
    let enhancer = null
    if (__DEV__) {
        middleware.push(loggerMiddleware)
        enhancer = composeWithDevTools(applyMiddleware(...middleware))
    } else {
        enhancer = applyMiddleware(...middleware)
    }
    const store: Store<appReducer.AppReducerState> = createStore(
        appReducer.reducer,
        initialState,
        enhancer
    )
    return store
}

export default configureStore
