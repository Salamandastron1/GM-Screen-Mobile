import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import MainContain from './MainContain';
import apiCall from '../helpers/API';
import Title from './Title';
import Treasures from './Treasures';
import Button from './Button';

class PlayerScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: 'Player',
      items: [],
      loading: true,
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  async fetchCharacter() {
    const { navigation } = this.props;
    const characterId = navigation.getParam('id');
    const url = `https://gm-screen-backend.herokuapp.com/api/v1/characters/${characterId}`;
    const character = await apiCall(url);

    if (character.name) {
      this.setState({
        loading: false,
        items: character.treasures,
        playerName: character.name,
      });
    }
  }

  render() {
    const { playerName, items, loading } = this.state;
    const treasure = items.map(item => <Treasures key={item.id} {...item} />);
    const title = `${playerName}'s Treasures`;

    return (
      <MainContain>
        <Title>
          {title}
        </Title>
        {loading
          ? (
            <Button
              onPress={this.fetchCharacter}
            >
              Refresh Page
            </Button>
          )
          : null}
        <ScrollView
          style={styles.scrollStyle}
        >
          <View
            style={styles.containerStyle}
          >
            {treasure}
          </View>
        </ScrollView>
      </MainContain>
    );
  }
}

const styles = {
  scrollStyle: {
    backgroundColor: '#f4d8b7',
  },
  containerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#54b8c0',
    margin: 10,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
};

PlayerScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PlayerScreen;
