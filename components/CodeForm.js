import React, { Component } from 'react';
import Title from './Title';
import MainContain from './MainContain';
import CardSection from './CardSection';
import Input from './Input';

class CodeForm extends Component {
  constructor() {
    super();

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
        <Title>
          Enter Code
        </Title>
      </MainContain>
    );
  }
}

export default CodeForm;
