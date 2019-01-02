import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text } from 'react-native';
import CardSection from './CardSection';

const sword = require('../assets/swords-emblem.svg');
const key = require('../assets/key.svg');
const book = require('../assets/black-book.svg');

const Treasures = ({ title, type }) => {
  const types = {
    sword,
    key,
    book,
  };

  return (
    <CardSection>
      <Text>{title}</Text>
      <Image src={types[type]} />
    </CardSection>
  );
};

Treasures.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Treasures;
