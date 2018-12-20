import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Title = ({ children }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>
      {children}
    </Text>
  </View>
);

const styles = {
  textStyle: {
    color: '#7A000D',
    fontSize: 70,
    alignSelf: 'center',
    fontWeight: '600',
  },
  viewStyle: {
    height: 60,
    borderRadius: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 20,
    height: null,
  }
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
