import React, { Component } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import MainContain from './MainContain';
import CardSection from './CardSection';
import Title from './Title';
import Input from './Input';
import Button from './Button';
import apiCall from '../helpers/API';

class CharacterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.determineRoute = this.determineRoute.bind(this);
  }

  handleInput({ nativeEvent }) {
    this.setState({
      name: nativeEvent.text,
    });
  }

  async determineRoute(name) {
    if (name.length === 0) {
      return Alert.alert('Please give your character a name');
    }
    const { navigation } = this.props;
    const characterId = navigation.getParam('id');
    const url = `https://gm-screen-backend.herokuapp.com/api/v1/characters/${characterId}`;
    const data = { name };

    await apiCall(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    navigation.navigate('PlayerScreen', { id: characterId });

    return undefined;
  }

  render() {
    const { name } = this.state;

    return (
      <MainContain>
        <Title>
          Create Your Character
        </Title>
        <CardSection>
          <Input
            value={name}
            onChange={this.handleInput}
            name="name"
            length={20}
            placeholder="Character Name"
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.determineRoute(name)}
          >
            Submit
          </Button>
        </CardSection>
      </MainContain>
    );
  }
}

CharacterForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CharacterForm;
