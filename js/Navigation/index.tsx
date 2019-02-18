import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../Screens/HomeScreen'


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
})

  export default createAppContainer(AppNavigator)
