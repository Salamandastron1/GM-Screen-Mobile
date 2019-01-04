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
    fontSize: 60,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  viewStyle: {
    borderRadius: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 30,
    height: null,
  },
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
