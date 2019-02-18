import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Components/HomeScreen'


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
})

  export default createAppContainer(AppNavigator)
