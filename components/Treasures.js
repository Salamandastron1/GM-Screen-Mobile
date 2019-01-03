import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';

const weapon = require('../assets/swords-emblem.png');
const key = require('../assets/key.png');
const book = require('../assets/black-book.png');
const gem = require('../assets/crystal-shine.png');

const Treasures = ({ title, type }) => {
  const types = {
    weapon,
    key,
    book,
    gem,
  };
  const newType = type.toLowerCase();

  return (
    <View style={styles.containerStyle}>
      <Text>{title}</Text>
      <Image
        style={styles.imageStyle}
        source={types[newType]}
      />
    </View>
  );
};

const styles = {
  imageStyle: {
    height: 100,
    width: 100,
  },
  containerStyle: {
    flexDirection: 'column',
  },
};

Treasures.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Treasures;
