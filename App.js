import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from './components/LandingPage';
import CodeForm from './components/CodeForm';
import CharacterForm from './components/CharacterForm';
import PlayerScreen from './components/PlayerScreen';

const RootStack = createStackNavigator(
  {
    LandingPage,
    CodeForm,
    CharacterForm,
    PlayerScreen,
  },
  {
    initialRouteName: 'LandingPage',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => (
  <AppContainer />
);

export default App;
