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

  handleInput() {
    this.setState({});
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
            text={code}
            onChange={this.handleInput}
            name="code"
            length={6}
          />
        </CardSection>
      </MainContain>
    );
  }
}

export default CodeForm;
