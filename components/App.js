import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from './LandingPage';
import CodeForm from './CodeForm';

const RootStack = createStackNavigator(
  {
    LandingPage,
    CodeForm,
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
