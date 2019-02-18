import { StackNavigator } from 'react-navigation'
import App from './Components/App'


const ScheduleStack = StackNavigator({
    Home: { screen: App },
  }, {
    headerMode: 'none',
    initialRouteName: 'Home',
  })

  export default ScheduleStack
