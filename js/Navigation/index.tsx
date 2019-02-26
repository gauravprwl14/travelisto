import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../Screens/HomeScreen'
import LoginScreen from '../Screens/LoginScreen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Login: {
        screen: LoginScreen,
    },
})

export default createAppContainer(AppNavigator)
