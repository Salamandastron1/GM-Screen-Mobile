import React, { Component } from 'react';
import { Alert } from 'react-native';
import Title from './Title';
import MainContain from './MainContain';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import apiCall from '../helpers/API';

class CodeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ nativeEvent }) {
    this.setState({
      code: nativeEvent.text,
    });
  }

  async determineRoute(code) {
    const { navigation } = this.props;
    const url = `https://gm-screen-backend.herokuapp.com/api/v1/characters/play_code/${code}`;
    const playerInfo = await apiCall(url);

    if (playerInfo.created === 1) {
      navigation.navigate('PlayerScreen', { id: playerInfo.id });
    } else if (playerInfo.created === 0) {
      navigation.navigate('CharacterForm', { id: playerInfo.id });
    } else {
      Alert.alert('Not a valid code');
    }
  }

  render() {
    const { code } = this.state;

    return (
      <MainContain>
        <Title>
          Enter Code
        </Title>
        <CardSection>
          <Input
            value={code}
            onChange={this.handleInput}
            name="code"
            length={6}
            placeholder="Enter Code"
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.determineRoute(code)}
          >
            Submit
          </Button>
        </CardSection>

      </MainContain>
    );
  }
}

export default CodeForm;
