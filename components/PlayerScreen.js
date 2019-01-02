import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContain from './MainContain';
import CardSection from './CardSection';
import apiCall from '../helpers/API';
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
    const { navigation } = this.props;
    const characterId = navigation.getParam('id', '0');
    const url = `https://gm-screen-backend.herokuapp.com/api/v1/characters/${characterId}`;
    const items = await apiCall(url);

    this.setState({
      items,
    });
  }

  render() {
    const { playerName, items } = this.state;
    const treasure = items.map(item => <CardSection item={item} />);
    return (
      <MainContain>
        <Title>
          {playerName}
        </Title>
        <CardSection>
          {treasure}
        </CardSection>
      </MainContain>
    );
  }
}

PlayerScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PlayerScreen;
