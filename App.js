/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import {
  createStackNavigator,
  createNavigationContainer
} from "react-navigation";
import Home from './src/home';
import Login from './src/login';
import Pokeplace from './src/pokeplace';
import Kanto from './src/kanto';
import Johoto from './src/johoto';
import Hoenn from './src/hoenn';
import Sinnoh from './src/sinnoh';
import Teselia from './src/teselia';
import Kalos from './src/kalos';
import Alola from './src/alola';


const AppNavigator = createStackNavigator({
   Home,
   Login,
   Pokeplace,
   Kanto,
   Johoto,
   Hoenn,
   Sinnoh,
   Teselia,
   Kalos,
   Alola
  },
  {
      
    headerMode:'none',
  }

  
);

export default createNavigationContainer(AppNavigator);