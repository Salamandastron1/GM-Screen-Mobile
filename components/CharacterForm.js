import React, { Component } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import MainContain from './MainContain';
import CardSection from './CardSection';
import Title from './Title';
import Input from './Input';
import Button from './Button';

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

  determineRoute(name) {
    if (name.length === 0) {
      return Alert.alert('Please give your character a name');
    }
    const { navigation } = this.props;
    const characterId = navigation.getParam('id');
    const url = `/api/v1/characters/${characterId}`;
    const data = { name };

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    navigation.navigate('PlayerScreen', { name });

    return undefined;
  }

  render() {
    const { name } = this.state;

    return (
      <MainContain>
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
        <Title>
          Create Your Character
        </Title>
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
