import React, { Component } from 'react';
import MainContain from './MainContain';
import CardSection from './CardSection';
import Title from './Title';
import Input from './Input';
import Button from './Button';

class CharacterForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ nativeEvent }) {
    let key;
    if (nativeEvent.target === 93) {
      key = 'name';
    } else {
      key = 'description';
    }
    this.setState({
      [key]: nativeEvent.text,
    });
  }

  render() {
    const { name, description } = this.state;

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
          <Input
            value={description}
            onChange={this.handleInput}
            name="description"
            length={50}
            placeholder="Character Description"
          />
        </CardSection>
        <CardSection>
          <Button>
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

export default CharacterForm;
