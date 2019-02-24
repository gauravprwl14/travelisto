import * as React from 'react'
import { Provider } from 'react-redux'
import Navigation from './Navigation'
import { configureStore } from './store'

const appStore = configureStore()

const MainApp = () => {
    return (
        <Provider store={appStore}>
            <Navigation />
        </Provider>
    )
}

export default MainApp
