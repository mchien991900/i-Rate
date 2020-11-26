import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/HomeScreen'
import RatingScreen from './src/RatingScreen'
import RestaurantScreen from './src/RestaurantScreen'
import SearchScreen from './src/SearchScreen'
import DetailScreen from './src/DetailScreen'

const appContainer = createAppContainer(
    createStackNavigator({
        Home: HomeScreen,
        Rating: RatingScreen,
        Restaurant: RestaurantScreen,
        Search: SearchScreen,
        Detail: DetailScreen
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
    )
)

export default appContainer;