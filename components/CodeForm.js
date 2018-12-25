import React, { Component } from 'react';
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
    const { navigation: navigate } = this.props;
    const url = `https://ben/api/v300/${code}`;
    const playerInfo = await apiCall(url);

    if (playerInfo.created) {
      navigate('Items');
    } else {
      navigate('CreateCharacter');
    }
  }

  render() {
    const { code } = this.state;

    return (
      <MainContain>
        <CardSection>
          <Input
            value={code}
            onChange={this.handleInput}
            name="code"
            length={6}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.determineRoute(code)}
          >
            Submit
          </Button>
        </CardSection>
        <Title>
          Enter Code
        </Title>
      </MainContain>
    );
  }
}

export default CodeForm;
