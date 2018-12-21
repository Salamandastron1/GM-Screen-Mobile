import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

const styles = {
  containerStyle: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'inherit',
    flexDirection: 'row',
  },
};

CardSection.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default CardSection;
