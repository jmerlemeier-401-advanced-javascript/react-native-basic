import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeView from './src/views/homeview.js';
import Name from './src/views/name.js';
import PetList from './src/views/petlist.js';

const MainNavigator = createStackNavigator (
  {
    Home: {screen: HomeView},
    Name: {screen: Name},
    PetList: {screen: PetList}
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(MainNavigator);
