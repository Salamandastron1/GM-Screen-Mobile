import React, { Component } from 'react';
import MainContain from './MainContain';
import CardSection from './CardSection';
import * as API from '../helpers/API';
import Title from './Title';

class PlayerScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: 'Tuchanka',
      items: [],
    };
  }

  async componentDidMount() {
    const url = '/api/v1/characters/:id';
    const items = await API.apiCall(url);

    this.setState({
      items,
    });
  }

  render() {
    const { playerName, items } = this.state;
    return (
      <MainContain>
        <Title>
          {playerName}
        </Title>
        <CardSection>
          {items}
        </CardSection>
      </MainContain>
    );
  }
}

export default PlayerScreen;
