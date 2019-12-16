import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeView from './src/views/homeview.js';
import Name from './src/views/name';

const MainNavigator = createStackNavigator (
  {
    Home: {screen: HomeView},
    Name: {screen: Name}
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(MainNavigator);
