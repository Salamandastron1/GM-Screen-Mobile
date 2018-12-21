import React, { Component } from 'react';
import Title from './Title';
import MainContain from './MainContain';
import CardSection from './CardSection';
import Input from './Input';

class CodeForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    console.log(e);
    this.setState({});
  }

  render() {
    const { title, description } = this.state;

    return (
      <MainContain>
        <Title>
          Enter Code
        </Title>
        <CardSection>
          <Input
            text={title}
            onChange={this.handleInput}
            name="title"
          />
          <Input
            text={description}
            name="description"
            onChange={this.handleInput}
          />
        </CardSection>
      </MainContain>
    );
  }
}

export default CodeForm;
