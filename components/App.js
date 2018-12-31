import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from './LandingPage';
import CodeForm from './CodeForm';
import CharacterForm from './CharacterForm';
import PlayerScreen from './PlayerScreen';

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


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <AppContainer />
    );
  }
}
